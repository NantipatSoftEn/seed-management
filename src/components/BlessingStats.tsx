import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import type { GiftFromGod } from 'src/types/InfoLamb'

 const BlessingStatData = [
  { thaiName: 'เผยพระวจนะ', score: 0, englishName: 'Prophecy' },
  { thaiName: 'อภิบาล', score: 0, englishName: 'Pastoral' },
  { thaiName: 'การสอน', score: 0, englishName: 'Teaching' },
  { thaiName: 'ถ้อยคำประกอบด้วยสติปัญญา', score: 0, englishName: 'WordContainerIntelligence' },
  { thaiName: 'ถ้อยคำประกอบด้วยความรู้', score: 0, englishName: 'WordContainKnowledge' },
  { thaiName: 'การตักเตือนและหนุนใจ', score: 0, englishName: 'WarningAndEncouragement' },
  { thaiName: 'การรับใช้วิญญาณ', score: 0, englishName: 'ObservationOfSpirits' },
  { thaiName: 'การบริจาค', score: 0, englishName: 'Donation' },
  { thaiName: 'การประนีประนอม', score: 0, englishName: 'Pampering' },
  { thaiName: 'ความเมตตา', score: 0, englishName: 'Compassion' },
  { thaiName: 'มีชัยชนะ', score: 0, englishName: 'Missionary' },
  { thaiName: 'ผู้ประกาศ', score: 0, englishName: 'Announcer' },
  { thaiName: 'การรับรองแขก', score: 0, englishName: 'GuestReception' },
  { thaiName: 'ความเชื่อ', score: 0, englishName: 'Belief' },
  { thaiName: 'ผู้ครอบครอง', score: 0, englishName: 'Owner' },
  { thaiName: 'ผู้บริหาร', score: 0, englishName: 'Executive' },
  { thaiName: 'การอัศจรรย์', score: 0, englishName: 'Miracle' },
  { thaiName: 'การรักษาโรค', score: 0, englishName: 'TreatmentOfDisease' },
  { thaiName: 'การพูดภาษาแปลก', score: 0, englishName: 'SpeakingInStrangeLanguages' },
  { thaiName: 'การแปลภาษาแปลก', score: 0, englishName: 'TranslationOfStrangeLanguages' },
  { thaiName: 'อัครทูต', score: 0, englishName: 'Ambassador' },
  { thaiName: 'การอยู่เป็นโสด', score: 0, englishName: 'BeingSingle' },
  { thaiName: 'การอธิษฐานอ้อนวอน', score: 0, englishName: 'PrayerOfSupplication' },
  { thaiName: 'การช่วยเหลือ', score: 0, englishName: 'Exorcism' },
  { thaiName: 'ผู้อุปการะ', score: 0, englishName: 'Benefactor' },
];



export default function BlessingStat({ score }: { readonly score: GiftFromGod | null | undefined  }) {
	const updateBlessingData = (blessingData: any[], score: GiftFromGod | null | undefined  ) => {
		for (const blessing of blessingData) {
			const key = blessing.englishName as keyof GiftFromGod
      blessing.score = score ? (score[key] as number) : 0
			blessing.name = blessing.thaiName
		}
		return blessingData
	}	

	const BlessingData = updateBlessingData(BlessingStatData, score)
	console.log('blessings', score)
	console.log("BlessingData", BlessingData)
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="p-6">
        {/* <h2 className="text-2xl font-bold text-gray-800">
          Stat ของประทาน
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          แสดงคะแนนของประทานต่างๆ (คะแนนเต็ม 15)
        </p> */}
      </div>
      <div className="p-6">
        <div className="h-[800px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={BlessingData}
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
