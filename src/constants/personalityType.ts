const Personalities = [
  { type: 'INTJ (Architect)', color: '#FDE68A' }, // Light Yellow
  { type: 'INTP (Logician)', color: '#BDE0FE' }, // Light Blue
  { type: 'ENTJ (Commander)', color: '#C8E6C9' }, // Light Green
  { type: 'ENTP (นักโต้วาที)', color: '#F4CCCC' }, // Light Pink
  { type: 'INFJ (Advocate)', color: '#E1BEE7' }, // Light Purple
  { type: 'INFP (ผู้ไกล่เกลี่ย)', color: '#D8BFD8' }, // Lavender
  { type: 'ENFJ (ตัวเอก)', color: '#FFF0A5' }, // Light Yellow
  { type: 'ENFP (Campaigner)', color: '#B0E0E6' }, // Light Turquoise
  { type: 'ISTJ (Inspector)', color: '#D3D3D3' }, // Light Gray
  { type: 'ISFJ (Defender)', color: '#F08080' }, // Light Coral
  { type: 'ESTJ (ผู้บริหาร)', color: '#90EE90' }, // Light Green
  { type: 'ESFJ (Consul)', color: '#DDA0DD' }, // Plum
  { type: 'ISTP (นักปราชญ์)', color: '#FFA07A' }, // Light Salmon
  { type: 'ISFP (Adventurer)', color: '#A9A9A9' }, // Dark Gray
  { type: 'ESTP (Entrepreneur)', color: '#FFA07A' }, // Light Salmon
  { type: 'ESFP (Entertainer)', color: '#B0E0E6' }, // Light Turquoise
]

export const getPersoanlityColor = (type: string | null) => {
  const personality = Personalities.find(
    personality => personality.type === type
  )
  return personality ? personality.color : '#FFFFFF'
}
