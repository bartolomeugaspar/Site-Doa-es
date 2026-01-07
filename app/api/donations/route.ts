import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Donation from '@/models/Donation'
import User from '@/models/User'
import Institution from '@/models/Institution'

// GET all donations
export async function GET(request: Request) {
  try {
    await dbConnect()

    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const institutionId = searchParams.get('institutionId')
    
    let query: any = {}
    
    if (userId) {
      query.userId = userId
    }
    
    if (institutionId) {
      query.institutionId = institutionId
    }

    const donations = await Donation.find(query)
      .populate('userId', 'name email')
      .populate('institutionId', 'name category')
      .sort({ createdAt: -1 })
      .lean()

    return NextResponse.json({
      success: true,
      data: donations,
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Erro ao buscar doações' },
      { status: 500 }
    )
  }
}

// POST create new donation
export async function POST(request: Request) {
  try {
    await dbConnect()

    const body = await request.json()
    
    // Create donation
    const donation = await Donation.create({
      ...body,
      transactionId: `TXN-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    })

    // Update user stats
    await User.findByIdAndUpdate(body.userId, {
      $inc: {
        totalDonated: body.amount,
        donationsCount: 1,
      },
    })

    // Update institution stats
    await Institution.findByIdAndUpdate(body.institutionId, {
      $inc: {
        totalRaised: body.amount,
      },
    })

    return NextResponse.json({
      success: true,
      data: donation,
    }, { status: 201 })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    )
  }
}
