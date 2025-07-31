'use client'

import { useState } from 'react'
import { Calculator, TrendingUp, DollarSign, Calendar, BarChart3 } from 'lucide-react'
import Link from 'next/link'

export default function SIPCalculatorPage() {
  const [monthlyAmount, setMonthlyAmount] = useState<number>(5000)
  const [annualReturn, setAnnualReturn] = useState<number>(12)
  const [investmentPeriod, setInvestmentPeriod] = useState<number>(10)
  const [results, setResults] = useState<{
    totalInvestment: number
    totalReturns: number
    maturityAmount: number
  } | null>(null)

  const calculateSIP = () => {
    const monthlyRate = annualReturn / 100 / 12
    const totalMonths = investmentPeriod * 12
    
    // SIP Future Value Formula: PMT * [((1 + r)^n - 1) / r] * (1 + r)
    const futureValue = monthlyAmount * (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate))
    const totalInvestment = monthlyAmount * totalMonths
    const totalReturns = futureValue - totalInvestment
    
    setResults({
      totalInvestment,
      totalReturns,
      maturityAmount: futureValue
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
    setMonthlyAmount(5000)
    setAnnualReturn(12)
    setInvestmentPeriod(10)
    setResults(null)
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="w-10 h-10 text-green-600 dark:text-green-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              SIP Calculator
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Calculate the future value of your Systematic Investment Plan (SIP) and plan your investment journey effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Investment Details
              </h2>

              <div className="space-y-6">
                {/* Monthly Investment Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Monthly Investment Amount
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      value={monthlyAmount}
                      onChange={(e) => setMonthlyAmount(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Enter monthly amount"
                      min="500"
                      step="500"
                    />
                  </div>
                  <div className="mt-2">
                    <input
                      type="range"
                      min="500"
                      max="100000"
                      step="500"
                      value={monthlyAmount}
                      onChange={(e) => setMonthlyAmount(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    />
                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
                      <span>₹500</span>
                      <span>₹1,00,000</span>
                    </div>
                  </div>
                </div>

                {/* Expected Annual Return */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Expected Annual Return (%)
                  </label>
                  <div className="relative">
                    <BarChart3 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      value={annualReturn}
                      onChange={(e) => setAnnualReturn(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Enter expected return"
                      min="1"
                      max="30"
                      step="0.5"
                    />
                  </div>
                  <div className="mt-2">
                    <input
                      type="range"
                      min="1"
                      max="30"
                      step="0.5"
                      value={annualReturn}
                      onChange={(e) => setAnnualReturn(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    />
                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
                      <span>1%</span>
                      <span>30%</span>
                    </div>
                  </div>
                </div>

                {/* Investment Period */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Investment Period (Years)
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      value={investmentPeriod}
                      onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Enter investment period"
                      min="1"
                      max="50"
                    />
                  </div>
                  <div className="mt-2">
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={investmentPeriod}
                      onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    />
                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
                      <span>1 Year</span>
                      <span>50 Years</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  onClick={calculateSIP}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  Calculate SIP
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
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Investment Summary
              </h3>

              {results ? (
                <div className="space-y-6">
                  {/* Maturity Amount */}
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                      {formatCurrency(results.maturityAmount)}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      Maturity Amount
                    </div>
                  </div>

                  {/* Breakdown */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <span className="text-gray-600 dark:text-gray-400">Total Investment</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
                        {formatCurrency(results.totalInvestment)}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <span className="text-gray-600 dark:text-gray-400">Total Returns</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">
                        {formatCurrency(results.totalReturns)}
                      </span>
                    </div>
                  </div>

                  {/* Investment Details */}
                  <div className="space-y-3 text-sm border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Monthly SIP:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{formatCurrency(monthlyAmount)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Annual Return:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{annualReturn}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Investment Period:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{investmentPeriod} years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Total Installments:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{investmentPeriod * 12}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <TrendingUp className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">
                    Enter your investment details and click Calculate SIP to see results.
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
                  href="/student-tools/emi-calculator"
                  className="block p-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors"
                >
                  <div className="font-medium text-gray-900 dark:text-white">EMI Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Calculate loan EMIs</div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* SIP Benefits */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Why Choose SIP?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Disciplined Investing</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Regular investment creates a disciplined approach to wealth creation</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Rupee Cost Averaging</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Reduces the impact of market volatility on your investments</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <DollarSign className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Power of Compounding</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Your money grows exponentially over time through compounding</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
