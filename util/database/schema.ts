export enum WidgetType {
  DailyQuote = "daily-quote",
  TwitchClip = "twitch-clip",
}

export interface Schema {
  articles: Array<{
    id: string;
    title: string;
    slug: string;
    coverImage?: string;
    description: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
  }>;
  users: Array<{
    name: string;
  }>;
  widgets: Array<{
    region: "sidebar";
    type: WidgetType;
    action: any;
    title: string;
    subtitle?: string;
    data: any;
  }>;
}
