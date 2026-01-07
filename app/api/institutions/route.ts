import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Institution from '@/models/Institution'

// GET all institutions
export async function GET(request: Request) {
  try {
    await dbConnect()

    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const search = searchParams.get('search')
    
    let query: any = { status: 'approved' }
    
    if (category && category !== 'Todas') {
      query.category = category
    }
    
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ]
    }

    const institutions = await Institution.find(query)
      .sort({ createdAt: -1 })
      .lean()

    return NextResponse.json({
      success: true,
      data: institutions,
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Erro ao buscar instituições' },
      { status: 500 }
    )
  }
}

// POST create new institution
export async function POST(request: Request) {
  try {
    await dbConnect()

    const body = await request.json()
    const institution = await Institution.create(body)

    return NextResponse.json({
      success: true,
      data: institution,
    }, { status: 201 })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    )
  }
}
