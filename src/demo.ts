export const demoInvite = {
  en: { title: 'Sara & Omar', message: 'Together with our families, we invite you to an evening of love, laughter, and new beginnings. It would mean the world to celebrate with you.' },
  ar: { title: 'سارة وعمر', message: 'بكل الحب، وبمشاركة عائلتينا، ندعوكم إلى أمسية من الفرح والضحكات والبدايات الجميلة. تكتمل فرحتنا بحضوركم.' },
  theme: 'sage', themeName: 'Botanical sage', demo: true,
};
export type Invite = typeof demoInvite;
export type Guest = { id: string; name: string; attending: string; count: number; note: string };
