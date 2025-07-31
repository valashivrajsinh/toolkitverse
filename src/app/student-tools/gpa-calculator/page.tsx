'use client'

import { useState } from 'react'
import { Plus, Minus, Calculator, BookOpen, Trophy } from 'lucide-react'

interface Course {
  id: string
  name: string
  credits: number
  grade: string
}

const gradePoints: { [key: string]: number } = {
  'A+': 4.0,
  'A': 4.0,
  'A-': 3.7,
  'B+': 3.3,
  'B': 3.0,
  'B-': 2.7,
  'C+': 2.3,
  'C': 2.0,
  'C-': 1.7,
  'D+': 1.3,
  'D': 1.0,
  'F': 0.0
}

const gradeOptions = Object.keys(gradePoints)

export default function GPACalculatorPage() {
  const [courses, setCourses] = useState<Course[]>([
    { id: '1', name: '', credits: 3, grade: 'A' }
  ])
  const [gpa, setGPA] = useState<number | null>(null)
  const [totalCredits, setTotalCredits] = useState<number>(0)

  const addCourse = () => {
    const newCourse: Course = {
      id: Date.now().toString(),
      name: '',
      credits: 3,
      grade: 'A'
    }
    setCourses([...courses, newCourse])
  }

  const removeCourse = (id: string) => {
    if (courses.length > 1) {
      setCourses(courses.filter(course => course.id !== id))
    }
  }

  const updateCourse = (id: string, field: keyof Course, value: string | number) => {
    setCourses(courses.map(course => 
      course.id === id ? { ...course, [field]: value } : course
    ))
  }

  const calculateGPA = () => {
    let totalPoints = 0
    let totalCreditHours = 0

    courses.forEach(course => {
      if (course.credits > 0 && course.grade) {
        const points = gradePoints[course.grade] * course.credits
        totalPoints += points
        totalCreditHours += course.credits
      }
    })

    if (totalCreditHours > 0) {
      const calculatedGPA = totalPoints / totalCreditHours
      setGPA(Math.round(calculatedGPA * 100) / 100)
      setTotalCredits(totalCreditHours)
    } else {
      setGPA(null)
      setTotalCredits(0)
    }
  }

  const resetCalculator = () => {
    setCourses([{ id: '1', name: '', credits: 3, grade: 'A' }])
    setGPA(null)
    setTotalCredits(0)
  }

  const getGPAStatus = (gpa: number) => {
    if (gpa >= 3.7) return { text: 'Excellent', color: 'text-green-600', bg: 'bg-green-50 dark:bg-green-900/20' }
    if (gpa >= 3.3) return { text: 'Very Good', color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20' }
    if (gpa >= 3.0) return { text: 'Good', color: 'text-yellow-600', bg: 'bg-yellow-50 dark:bg-yellow-900/20' }
    if (gpa >= 2.0) return { text: 'Satisfactory', color: 'text-orange-600', bg: 'bg-orange-50 dark:bg-orange-900/20' }
    return { text: 'Needs Improvement', color: 'text-red-600', bg: 'bg-red-50 dark:bg-red-900/20' }
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calculator className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              GPA Calculator
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Calculate your Grade Point Average (GPA) quickly and accurately. 
            Add your courses, credits, and grades to get your cumulative GPA.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Course Information
                </h2>
                <button
                  onClick={addCourse}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Course
                </button>
              </div>

              <div className="space-y-4">
                {courses.map((course, index) => (
                  <div key={course.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    {/* Course Name */}
                    <div className="md:col-span-5">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Course Name
                      </label>
                      <input
                        type="text"
                        placeholder={`Course ${index + 1}`}
                        value={course.name}
                        onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                      />
                    </div>

                    {/* Credits */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Credits
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="10"
                        step="0.5"
                        value={course.credits}
                        onChange={(e) => updateCourse(course.id, 'credits', parseFloat(e.target.value) || 0)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                      />
                    </div>

                    {/* Grade */}
                    <div className="md:col-span-3">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Grade
                      </label>
                      <select
                        value={course.grade}
                        onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                      >
                        {gradeOptions.map(grade => (
                          <option key={grade} value={grade}>
                            {grade} ({gradePoints[grade].toFixed(1)})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Remove Button */}
                    <div className="md:col-span-2 flex items-end">
                      <button
                        onClick={() => removeCourse(course.id)}
                        disabled={courses.length === 1}
                        className="w-full px-3 py-2 bg-red-100 hover:bg-red-200 disabled:bg-gray-100 disabled:cursor-not-allowed text-red-600 disabled:text-gray-400 rounded-lg transition-colors"
                      >
                        <Minus className="w-4 h-4 mx-auto" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button
                  onClick={calculateGPA}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Calculate GPA
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
                Your Results
              </h3>

              {gpa !== null ? (
                <div className="space-y-6">
                  {/* GPA Display */}
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {gpa.toFixed(2)}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      Your GPA
                    </div>
                  </div>

                  {/* Status */}
                  <div className={`p-4 rounded-lg ${getGPAStatus(gpa).bg}`}>
                    <div className="text-center">
                      <Trophy className={`w-8 h-8 mx-auto mb-2 ${getGPAStatus(gpa).color}`} />
                      <div className={`font-semibold ${getGPAStatus(gpa).color}`}>
                        {getGPAStatus(gpa).text}
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Total Credits:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{totalCredits}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Total Courses:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{courses.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Scale:</span>
                      <span className="font-medium text-gray-900 dark:text-white">4.0</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <BookOpen className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">
                    Add your courses and click Calculate GPA to see your results.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
