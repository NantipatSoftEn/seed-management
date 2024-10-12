
import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { FileText } from "lucide-react"

const blessingData = [
  { name: "เผยพระวจนะ", score: 10 },
  { name: "อภิบาล", score: 2 },
  { name: "การสอน", score: 3 },
  { name: "ถ้อยคำประกอบด้วยสติปัญญา", score: 15 },
  { name: "ถ้อยคำประกอบด้วยความรู้", score: 7 },
  { name: "การตักเตือนและหนุนใจ", score: 6 },
  { name: "การรับใช้วิญญาณ", score: 3 },
  { name: "การบริจาค", score: 2 },
  { name: "การประนีประนอม", score: 9 },
  { name: "ความเมตตา", score: 10 },
  { name: "มีชัยชนะ", score: 8 },
  { name: "ผู้ประกาศ", score: 4 },
  { name: "การรับรองแขก", score: 3 },
  { name: "ความเชื่อ", score: 1 },
  { name: "ผู้ครอบครอง", score: 8 },
  { name: "ผู้บริหาร", score: 9 },
  { name: "การอัศจรรย์", score: 7 },
  { name: "การรักษาโรค", score: 10 },
  { name: "การพูดภาษาแปลก", score: 11 },
  { name: "การแปลภาษาแปลก", score: 9 },
  { name: "อัครทูต", score: 6 },
  { name: "การอยู่เป็นโสด", score: 2 },
  { name: "การอธิษฐานอ้อนวอน", score: 3 },
  { name: "การช่วยเหลือ", score: 4 },
  { name: "ผู้อุปการะ", score: 9 },
]

export default function BlessingStat() {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">Stat ของประทานของ test</h2>
        <p className="text-sm text-gray-600 mt-1">แสดงคะแนนของประทานต่างๆ (คะแนนเต็ม 15)</p>
      </div>
      <div className="p-6 space-y-8">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={blessingData}>
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} interval={0} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="score" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ลำดับ
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ชื่อของประทาน
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  คะแนน
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {blessingData.map((blessing, index) => (
                <tr key={blessing.name}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm font-medium text-gray-900">{blessing.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                    {blessing.score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
