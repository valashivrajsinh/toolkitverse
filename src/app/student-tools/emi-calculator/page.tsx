'use client'

import { useState } from 'react'
import { Calculator, Home, Percent, Calendar, PieChart } from 'lucide-react'
import Link from 'next/link'

export default function EMICalculatorPage() {
  const [loanAmount, setLoanAmount] = useState<number>(1000000)
  const [interestRate, setInterestRate] = useState<number>(8.5)
  const [loanTenure, setLoanTenure] = useState<number>(20)
  const [results, setResults] = useState<{
    emi: number
    totalAmount: number
    totalInterest: number
    breakdown: { year: number; principal: number; interest: number; balance: number }[]
  } | null>(null)

  const calculateEMI = () => {
    const principal = loanAmount
    const monthlyRate = interestRate / 100 / 12
    const totalMonths = loanTenure * 12
    
    // EMI Formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
                (Math.pow(1 + monthlyRate, totalMonths) - 1)
    
    const totalAmount = emi * totalMonths
    const totalInterest = totalAmount - principal
    
    // Generate year-wise breakdown
    const breakdown = []
    let balance = principal
    
    for (let year = 1; year <= loanTenure; year++) {
      let yearlyInterest = 0
      let yearlyPrincipal = 0
      
      for (let month = 1; month <= 12; month++) {
        const monthlyInterest = balance * monthlyRate
        const monthlyPrincipal = emi - monthlyInterest
        
        yearlyInterest += monthlyInterest
        yearlyPrincipal += monthlyPrincipal
        balance -= monthlyPrincipal
      }
      
      breakdown.push({
        year,
        principal: yearlyPrincipal,
        interest: yearlyInterest,
        balance: Math.max(0, balance)
      })
    }
    
    setResults({
      emi,
      totalAmount,
      totalInterest,
      breakdown
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount)
  }

  const resetCalculator = () => {
    setLoanAmount(1000000)
    setInterestRate(8.5)
    setLoanTenure(20)
    setResults(null)
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Home className="w-10 h-10 text-orange-600 dark:text-orange-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              EMI Calculator
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Calculate your Equated Monthly Installment (EMI) for home loans, personal loans, or any other loans.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="xl:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Loan Details
              </h2>

              <div className="space-y-6">
                {/* Loan Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Loan Amount
                  </label>
                  <div className="relative">
                    <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Enter loan amount"
                      min="50000"
                      step="50000"
                    />
                  </div>
                  <div className="mt-2">
                    <input
                      type="range"
                      min="50000"
                      max="10000000"
                      step="50000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    />
                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
                      <span>₹50K</span>
                      <span>₹1 Crore</span>
                    </div>
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Annual Interest Rate (%)
                  </label>
                  <div className="relative">
                    <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Enter interest rate"
                      min="1"
                      max="30"
                      step="0.25"
                    />
                  </div>
                  <div className="mt-2">
                    <input
                      type="range"
                      min="1"
                      max="30"
                      step="0.25"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    />
                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
                      <span>1%</span>
                      <span>30%</span>
                    </div>
                  </div>
                </div>

                {/* Loan Tenure */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Loan Tenure (Years)
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      value={loanTenure}
                      onChange={(e) => setLoanTenure(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Enter loan tenure"
                      min="1"
                      max="30"
                    />
                  </div>
                  <div className="mt-2">
                    <input
                      type="range"
                      min="1"
                      max="30"
                      value={loanTenure}
                      onChange={(e) => setLoanTenure(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    />
                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
                      <span>1 Year</span>
                      <span>30 Years</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  onClick={calculateEMI}
                  className="flex-1 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  Calculate EMI
                </button>
                <button
                  onClick={resetCalculator}
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="xl:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                EMI Breakdown
              </h3>

              {results ? (
                <div className="space-y-6">
                  {/* Monthly EMI */}
                  <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                      {formatCurrency(results.emi)}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      Monthly EMI
                    </div>
                  </div>

                  {/* Loan Summary */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <span className="text-gray-600 dark:text-gray-400">Principal Amount</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
                        {formatCurrency(loanAmount)}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <span className="text-gray-600 dark:text-gray-400">Total Interest</span>
                      <span className="font-semibold text-red-600 dark:text-red-400">
                        {formatCurrency(results.totalInterest)}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <span className="text-gray-600 dark:text-gray-400">Total Amount</span>
                      <span className="font-semibold text-green-600 dark:text-green-400">
                        {formatCurrency(results.totalAmount)}
                      </span>
                    </div>
                  </div>

                  {/* Pie Chart Representation */}
                  <div className="text-center">
                    <PieChart className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Principal: {((loanAmount / results.totalAmount) * 100).toFixed(1)}% | 
                      Interest: {((results.totalInterest / results.totalAmount) * 100).toFixed(1)}%
                    </div>
                  </div>

                  {/* Loan Details */}
                  <div className="space-y-3 text-sm border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Interest Rate:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{interestRate}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Loan Tenure:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{loanTenure} years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Total Payments:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{loanTenure * 12}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Home className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">
                    Enter your loan details and click Calculate EMI to see results.
                  </p>
                </div>
              )}
            </div>

            {/* Quick Links */}
            <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Other Calculators
              </h4>
              <div className="space-y-3">
                <Link
                  href="/student-tools/gpa-calculator"
                  className="block p-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors"
                >
                  <div className="font-medium text-gray-900 dark:text-white">GPA Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Calculate your grade point average</div>
                </Link>
                <Link
                  href="/student-tools/sip-calculator"
                  className="block p-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors"
                >
                  <div className="font-medium text-gray-900 dark:text-white">SIP Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Plan your investments</div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Year-wise Breakdown Table */}
        {results && (
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Year-wise Payment Breakdown
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 text-gray-600 dark:text-gray-400">Year</th>
                    <th className="text-right py-3 text-gray-600 dark:text-gray-400">Principal</th>
                    <th className="text-right py-3 text-gray-600 dark:text-gray-400">Interest</th>
                    <th className="text-right py-3 text-gray-600 dark:text-gray-400">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {results.breakdown.slice(0, 10).map((row) => (
                    <tr key={row.year} className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 text-gray-900 dark:text-white">{row.year}</td>
                      <td className="py-3 text-right text-green-600 dark:text-green-400">
                        {formatCurrency(row.principal)}
                      </td>
                      <td className="py-3 text-right text-red-600 dark:text-red-400">
                        {formatCurrency(row.interest)}
                      </td>
                      <td className="py-3 text-right text-gray-900 dark:text-white">
                        {formatCurrency(row.balance)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {results.breakdown.length > 10 && (
                <div className="text-center mt-4 text-gray-500 dark:text-gray-400">
                  Showing first 10 years. Total tenure: {loanTenure} years
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
