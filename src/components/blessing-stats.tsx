import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { FileText } from 'lucide-react'

const blessingData = [
  { name: 'เผยพระวจนะ', score: 10 },
  { name: 'อภิบาล', score: 2 },
  { name: 'การสอน', score: 3 },
  { name: 'ถ้อยคำประกอบด้วยสติปัญญา', score: 15 },
  { name: 'ถ้อยคำประกอบด้วยความรู้', score: 7 },
  { name: 'การตักเตือนและหนุนใจ', score: 6 },
  { name: 'การรับใช้วิญญาณ', score: 3 },
  { name: 'การบริจาค', score: 2 },
  { name: 'การประนีประนอม', score: 9 },
  { name: 'ความเมตตา', score: 10 },
  { name: 'มีชัยชนะ', score: 8 },
  { name: 'ผู้ประกาศ', score: 4 },
  { name: 'การรับรองแขก', score: 3 },
  { name: 'ความเชื่อ', score: 1 },
  { name: 'ผู้ครอบครอง', score: 8 },
  { name: 'ผู้บริหาร', score: 9 },
  { name: 'การอัศจรรย์', score: 7 },
  { name: 'การรักษาโรค', score: 10 },
  { name: 'การพูดภาษาแปลก', score: 11 },
  { name: 'การแปลภาษาแปลก', score: 9 },
  { name: 'อัครทูต', score: 6 },
  { name: 'การอยู่เป็นโสด', score: 2 },
  { name: 'การอธิษฐานอ้อนวอน', score: 3 },
  { name: 'การช่วยเหลือ', score: 4 },
  { name: 'ผู้อุปการะ', score: 9 },
]

export default function BlessingStat() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Stat ของประทานของ test
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          แสดงคะแนนของประทานต่างๆ (คะแนนเต็ม 15)
        </p>
      </div>
      <div className="p-6">
        <div className="h-[800px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={blessingData}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis type="number" domain={[0, 15]} />
              <YAxis dataKey="name" type="category" width={170} />
              <Tooltip />
              <Bar dataKey="score" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
