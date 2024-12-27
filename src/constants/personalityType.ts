export const Personalities = [
  { type: 'INTJ (Architect)', color: '#E6C7C2' }, // Pastel Pink
  { type: 'INTP (Logician)', color: '#AED6F1' }, // Pastel Blue
  { type: 'ENTJ (Commander)', color: '#A2D9CE' }, // Pastel Green
  { type: 'ENTP (นักโต้วาที)', color: '#F9E79F' }, // Pastel Yellow
  { type: 'INFJ (Advocate)', color: '#D7BDE2' }, // Pastel Purple
  { type: 'INFP (ผู้ไกล่เกลี่ย)', color: '#F5CBA7' }, // Pastel Orange
  { type: 'ENFJ (ตัวเอก)', color: '#C39BD3' }, // Pastel Lavender
  { type: 'ENFP (Campaigner)', color: '#76D7C4' }, // Pastel Teal
  { type: 'ISTJ (Inspector)', color: '#D5DBDB' }, // Pastel Gray
  { type: 'ISFJ (Defender)', color: '#FDEBD0' }, // Pastel Cream
  { type: 'ESTJ (ผู้บริหาร)', color: '#ABEBC6' }, // Pastel Mint
  { type: 'ESFJ (Consul)', color: '#E8DAEF' }, // Pastel Lilac
  { type: 'ISTP (นักปราชญ์)', color: '#F2D7D5' }, // Pastel Rose
  { type: 'ISFP (Adventurer)', color: '#D6EAF8' }, // Pastel Sky Blue
  { type: 'ESTP (Entrepreneur)', color: '#F8C471' }, // Pastel Orange
  { type: 'ESFP (Entertainer)', color: '#7FB3D5' }, // Pastel Steel Blue
];
export const getPersoanlityColor = (type: string | null) => {
  const personality = Personalities.find(
    personality => personality.type === type
  )
  return personality ? personality.color : '#FFFFFF'
}
