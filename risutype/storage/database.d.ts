import type { SerializableHypaV2Data } from "../process/memory/hypav2";
import type { SerializableHypaV3Data } from "../process/memory/hypav3";
import type { OnnxModelFiles } from "../process/transformers";
import type { triggerscript as triggerscriptMain } from "../process/triggers";

export interface customscript {
  comment: string;
  in: string;
  out: string;
  type: string;
  flag?: string;
  ableFlag?: boolean;
}

export type triggerscript = triggerscriptMain;

export interface loreBook {
  key: string;
  secondkey: string;
  insertorder: number;
  comment: string;
  content: string;
  mode: "multiple" | "constant" | "normal" | "child";
  alwaysActive: boolean;
  selective: boolean;
  extentions?: {
    risu_case_sensitive: boolean;
  };
  activationPercent?: number;
  loreCache?: {
    key: string;
    data: string[];
  };
  useRegex?: boolean;
  bookVersion?: number;
  id?: string;
}

export interface character {
  type?: "character";
  name: string;
  image?: string;
  firstMessage: string;
  desc: string;
  notes: string;
  chats: Chat[];
  chatFolders: ChatFolder[];
  chatPage: number;
  viewScreen: "emotion" | "none" | "imggen" | "vn";
  bias: [string, number][];
  emotionImages: [string, string][];
  globalLore: loreBook[];
  chaId: string;
  sdData: [string, string][];
  newGenData?: {
    prompt: string;
    negative: string;
    instructions: string;
    emotionInstructions: string;
  };
  customscript: customscript[];
  triggerscript: triggerscript[];
  utilityBot: boolean;
  exampleMessage: string;
  removedQuotes?: boolean;
  creatorNotes: string;
  systemPrompt: string;
  postHistoryInstructions: string;
  alternateGreetings: string[];
  tags: string[];
  creator: string;
  characterVersion: string;
  personality: string;
  scenario: string;
  firstMsgIndex: number;
  loreSettings?: loreSettings;
  loreExt?: any;
  additionalData?: {
    tag?: string[];
    creator?: string;
    character_version?: string;
  };
  ttsMode?: string;
  ttsSpeech?: string;
  voicevoxConfig?: {
    speaker?: string;
    SPEED_SCALE?: number;
    PITCH_SCALE?: number;
    INTONATION_SCALE?: number;
    VOLUME_SCALE?: number;
  };
  naittsConfig?: {
    customvoice?: boolean;
    voice?: string;
    version?: string;
  };
  gptSoVitsConfig?: {
    url?: string;
    use_auto_path?: boolean;
    ref_audio_path?: string;
    use_long_audio?: boolean;
    ref_audio_data?: {
      fileName: string;
      assetId: string;
    };
    volume?: number;
    text_lang?:
      | "auto"
      | "auto_yue"
      | "en"
      | "zh"
      | "ja"
      | "yue"
      | "ko"
      | "all_zh"
      | "all_ja"
      | "all_yue"
      | "all_ko";
    text?: string;
    use_prompt?: boolean;
    prompt?: string | null;
    prompt_lang?:
      | "auto"
      | "auto_yue"
      | "en"
      | "zh"
      | "ja"
      | "yue"
      | "ko"
      | "all_zh"
      | "all_ja"
      | "all_yue"
      | "all_ko";
    top_p?: number;
    temperature?: number;
    speed?: number;
    top_k?: number;
    text_split_method?: "cut0" | "cut1" | "cut2" | "cut3" | "cut4" | "cut5";
  };
  fishSpeechConfig?: {
    model?: {
      _id: string;
      title: string;
      description: string;
    };
    chunk_length: number;
    normalize: boolean;
  };
  supaMemory?: boolean;
  additionalAssets?: [string, string, string][];
  ttsReadOnlyQuoted?: boolean;
  replaceGlobalNote: string;
  backgroundHTML?: string;
  reloadKeys?: number;
  backgroundCSS?: string;
  license?: string;
  private?: boolean;
  additionalText: string;
  oaiVoice?: string;
  virtualscript?: string;
  scriptstate?: { [key: string]: string | number | boolean };
  depth_prompt?: { depth: number; prompt: string };
  extentions?: { [key: string]: any };
  largePortrait?: boolean;
  lorePlus?: boolean;
  inlayViewScreen?: boolean;
  hfTTS?: {
    model: string;
    language: string;
  };
  vits?: OnnxModelFiles;
  realmId?: string;
  imported?: boolean;
  trashTime?: number;
  nickname?: string;
  source?: string[];
  group_only_greetings?: string[];
  creation_date?: number;
  modification_date?: number;
  ccAssets?: Array<{
    type: string;
    uri: string;
    name: string;
    ext: string;
  }>;
  defaultVariables?: string;
  lowLevelAccess?: boolean;
  hideChatIcon?: boolean;
  lastInteraction?: number;
  translatorNote?: string;
}

export interface loreSettings {
  tokenBudget: number;
  scanDepth: number;
  recursiveScanning: boolean;
  fullWordMatching?: boolean;
}

export interface Chat {
  message: Message[];
  note: string;
  name: string;
  localLore: loreBook[];
  sdData?: string;
  supaMemoryData?: string;
  hypaV2Data?: SerializableHypaV2Data;
  lastMemory?: string;
  suggestMessages?: string[];
  isStreaming?: boolean;
  scriptstate?: { [key: string]: string | number | boolean };
  modules?: string[];
  id?: string;
  bindedPersona?: string;
  fmIndex?: number;
  hypaV3Data?: SerializableHypaV3Data;
  folderId?: string;
  lastDate?: number;
}

export interface ChatFolder {
  id: string;
  name?: string;
  color?: string;
  folded: boolean;
}

export interface Message {
  role: "user" | "char";
  data: string;
  saying?: string;
  chatId?: string;
  time?: number;
  generationInfo?: MessageGenerationInfo;
  name?: string;
  otherUser?: boolean;
}

export interface MessageGenerationInfo {
  model?: string;
  generationId?: string;
  inputTokens?: number;
  outputTokens?: number;
  maxContext?: number;
}
