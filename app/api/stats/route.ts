import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Donation from '@/models/Donation'
import Institution from '@/models/Institution'

export async function GET() {
  try {
    await dbConnect()

    // Total donations stats
    const totalDonations = await Donation.aggregate([
      { $match: { paymentStatus: 'completed' } },
      {
        $group: {
          _id: null,
          total: { $sum: '$amount' },
          count: { $sum: 1 },
        },
      },
    ])

    // Donations by category
    const donationsByCategory = await Donation.aggregate([
      { $match: { paymentStatus: 'completed' } },
      {
        $lookup: {
          from: 'institutions',
          localField: 'institutionId',
          foreignField: '_id',
          as: 'institution',
        },
      },
      { $unwind: '$institution' },
      {
        $group: {
          _id: '$institution.category',
          total: { $sum: '$amount' },
          count: { $sum: 1 },
        },
      },
    ])

    // Monthly donations
    const monthlyDonations = await Donation.aggregate([
      { $match: { paymentStatus: 'completed' } },
      {
        $group: {
          _id: {
            year: { $year: '$createdAt' },
            month: { $month: '$createdAt' },
          },
          total: { $sum: '$amount' },
          count: { $sum: 1 },
        },
      },
      { $sort: { '_id.year': -1, '_id.month': -1 } },
      { $limit: 6 },
    ])

    // Total beneficiaries
    const institutions = await Institution.find({ status: 'approved' })
    const totalBeneficiaries = institutions.reduce((sum, inst) => sum + (inst.beneficiaries || 0), 0)

    return NextResponse.json({
      success: true,
      data: {
        totalAmount: totalDonations[0]?.total || 0,
        totalDonations: totalDonations[0]?.count || 0,
        totalBeneficiaries,
        totalInstitutions: institutions.length,
        donationsByCategory,
        monthlyDonations,
      },
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Erro ao buscar estatísticas' },
      { status: 500 }
    )
  }
}
