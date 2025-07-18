export interface triggerscript {
  comment: string;
  type: "start" | "manual" | "output" | "input" | "display" | "request";
  conditions: triggerCondition[];
  effect: triggerEffect[];
  lowLevelAccess?: boolean;
}

export type triggerCondition =
  | triggerConditionsVar
  | triggerConditionsExists
  | triggerConditionsChatIndex;

export type triggerEffect = triggerEffectV1 | triggerCode | triggerEffectV2;
export type triggerEffectV1 =
  | triggerEffectCutChat
  | triggerEffectModifyChat
  | triggerEffectImgGen
  | triggerEffectRegex
  | triggerEffectRunLLM
  | triggerEffectCheckSimilarity
  | triggerEffectSendAIprompt
  | triggerEffectShowAlert
  | triggerEffectSetvar
  | triggerEffectSystemPrompt
  | triggerEffectImpersonate
  | triggerEffectCommand
  | triggerEffectStop
  | triggerEffectRunTrigger;
export type triggerEffectV2 =
  | triggerV2Header
  | triggerV2IfVar
  | triggerV2Else
  | triggerV2EndIndent
  | triggerV2SetVar
  | triggerV2Loop
  | triggerV2BreakLoop
  | triggerV2RunTrigger
  | triggerV2ConsoleLog
  | triggerV2StopTrigger
  | triggerV2CutChat
  | triggerV2ModifyChat
  | triggerV2SystemPrompt
  | triggerV2Impersonate
  | triggerV2Command
  | triggerV2SendAIprompt
  | triggerV2ImgGen
  | triggerV2CheckSimilarity
  | triggerV2RunLLM
  | triggerV2ShowAlert
  | triggerV2ExtractRegex
  | triggerV2GetLastMessage
  | triggerV2GetMessageAtIndex
  | triggerV2GetMessageCount
  | triggerV2GetLastMessage
  | triggerV2GetMessageAtIndex
  | triggerV2GetMessageCount
  | triggerV2ModifyLorebook
  | triggerV2GetLorebook
  | triggerV2GetLorebookCount
  | triggerV2GetLorebookEntry
  | triggerV2SetLorebookActivation
  | triggerV2GetLorebookIndexViaName
  | triggerV2LoopNTimes
  | triggerV2Random
  | triggerV2GetCharAt
  | triggerV2GetCharCount
  | triggerV2ToLowerCase
  | triggerV2ToUpperCase
  | triggerV2SetCharAt
  | triggerV2SplitString
  | triggerV2GetCharacterDesc
  | triggerV2SetCharacterDesc
  | triggerV2MakeArrayVar
  | triggerV2GetArrayVarLength
  | triggerV2GetArrayVar
  | triggerV2SetArrayVar
  | triggerV2PushArrayVar
  | triggerV2PopArrayVar
  | triggerV2ShiftArrayVar
  | triggerV2UnshiftArrayVar
  | triggerV2SpliceArrayVar
  | triggerV2GetFirstMessage
  | triggerV2SliceArrayVar
  | triggerV2GetIndexOfValueInArrayVar
  | triggerV2RemoveIndexFromArrayVar
  | triggerV2ConcatString
  | triggerV2GetLastUserMessage
  | triggerV2GetLastCharMessage
  | triggerV2GetAlertInput
  | triggerV2GetDisplayState
  | triggerV2SetDisplayState
  | triggerV2UpdateGUI
  | triggerV2Wait
  | triggerV2GetRequestState
  | triggerV2SetRequestState
  | triggerV2GetRequestStateRole
  | triggerV2SetRequestStateRole
  | triggerV2GetReuqestStateLength
  | triggerV2IfAdvanced
  | triggerV2QuickSearchChat
  | triggerV2StopPromptSending;

export type triggerConditionsVar = {
  type: "var" | "value";
  var: string;
  value: string;
  operator: "=" | "!=" | ">" | "<" | ">=" | "<=" | "null" | "true";
};

export type triggerCode = {
  type: "triggercode" | "triggerlua";
  code: string;
};

export type triggerConditionsChatIndex = {
  type: "chatindex";
  value: string;
  operator: "=" | "!=" | ">" | "<" | ">=" | "<=" | "null" | "true";
};

export type triggerConditionsExists = {
  type: "exists";
  value: string;
  type2: "strict" | "loose" | "regex";
  depth: number;
};

export interface triggerEffectSetvar {
  type: "setvar";
  operator: "=" | "+=" | "-=" | "*=" | "/=";
  var: string;
  value: string;
}

export interface triggerEffectCutChat {
  type: "cutchat";
  start: string;
  end: string;
}

export interface triggerEffectModifyChat {
  type: "modifychat";
  index: string;
  value: string;
}

export interface triggerEffectSystemPrompt {
  type: "systemprompt";
  location: "start" | "historyend" | "promptend";
  value: string;
}

export interface triggerEffectImpersonate {
  type: "impersonate";
  role: "user" | "char";
  value: string;
}

export interface triggerEffectCommand {
  type: "command";
  value: string;
}

export interface triggerEffectRegex {
  type: "extractRegex";
  value: string;
  regex: string;
  flags: string;
  result: string;
  inputVar: string;
}

export interface triggerEffectShowAlert {
  type: "showAlert";
  alertType: string;
  value: string;
  inputVar: string;
}

export interface triggerEffectRunTrigger {
  type: "runtrigger";
  value: string;
}

export interface triggerEffectStop {
  type: "stop";
}

export interface triggerEffectSendAIprompt {
  type: "sendAIprompt";
}

export interface triggerEffectImgGen {
  type: "runImgGen";
  value: string;
  negValue: string;
  inputVar: string;
}

export interface triggerEffectCheckSimilarity {
  type: "checkSimilarity";
  source: string;
  value: string;
  inputVar: string;
}

export interface triggerEffectRunLLM {
  type: "runLLM";
  value: string;
  inputVar: string;
}

export interface triggerEffectRunAxLLM {
  type: "runAxLLM";
  value: string;
  inputVar: string;
}

export type triggerV2Header = {
  type: "v2Header";
  code?: string;
  indent: number;
};

export type triggerV2IfVar = {
  type: "v2If";
  condition: "=" | "!=" | ">" | "<" | ">=" | "<=";
  targetType: "var" | "value";
  target: string;
  source: string;
  indent: number;
};

export type triggerV2Else = {
  type: "v2Else";
  indent: number;
};

export type triggerV2EndIndent = {
  type: "v2EndIndent";
  endOfLoop?: boolean;
  indent: number;
};

export type triggerV2SetVar = {
  type: "v2SetVar";
  operator: "=" | "+=" | "-=" | "*=" | "/=" | "%=";
  var: string;
  valueType: "var" | "value";
  value: string;
  indent: number;
};

export type triggerV2Loop = {
  type: "v2Loop";
  indent: number;
};

export type triggerV2LoopNTimes = {
  type: "v2LoopNTimes";
  value: string;
  valueType: "var" | "value";
  indent: number;
};

export type triggerV2BreakLoop = {
  type: "v2BreakLoop";
  indent: number;
};

export type triggerV2RunTrigger = {
  type: "v2RunTrigger";
  target: string;
  indent: number;
};

export type triggerV2ConsoleLog = {
  type: "v2ConsoleLog";
  sourceType: "var" | "value";
  source: string;
  indent: number;
};

export type triggerV2StopTrigger = {
  type: "v2StopTrigger";
  indent: number;
};

export type triggerV2CutChat = {
  type: "v2CutChat";
  start: string;
  startType: "var" | "value";
  end: string;
  endType: "var" | "value";
  indent: number;
};

export type triggerV2ModifyChat = {
  type: "v2ModifyChat";
  index: string;
  indexType: "var" | "value";
  value: string;
  valueType: "var" | "value";
  indent: number;
};

export type triggerV2SystemPrompt = {
  type: "v2SystemPrompt";
  location: "start" | "historyend" | "promptend";
  value: string;
  valueType: "var" | "value";
  indent: number;
};

export type triggerV2Impersonate = {
  type: "v2Impersonate";
  role: "user" | "char";
  value: string;
  valueType: "var" | "value";
  indent: number;
};

export type triggerV2Command = {
  type: "v2Command";
  value: string;
  valueType: "var" | "value";
  indent: number;
};

export type triggerV2SendAIprompt = {
  type: "v2SendAIprompt";
  indent: number;
};

export type triggerV2ImgGen = {
  type: "v2ImgGen";
  value: string;
  valueType: "var" | "value";
  negValue: string;
  negValueType: "var" | "value";
  outputVar: string;
  indent: number;
};

export type triggerV2CheckSimilarity = {
  type: "v2CheckSimilarity";
  source: string;
  sourceType: "var" | "value";
  value: string;
  valueType: "var" | "value";
  outputVar: string;
  indent: number;
};

export type triggerV2RunLLM = {
  type: "v2RunLLM";
  value: string;
  valueType: "var" | "value";
  model: "model" | "submodel";
  outputVar: string;
  indent: number;
};

export type triggerV2ShowAlert = {
  type: "v2ShowAlert";
  value: string;
  valueType: "var" | "value";
  indent: number;
};

export type triggerV2ExtractRegex = {
  type: "v2ExtractRegex";
  value: string;
  valueType: "var" | "value";
  regex: string;
  regexType: "var" | "value";
  flags: string;
  flagsType: "var" | "value";
  result: string;
  resultType: "var" | "value";
  outputVar: string;
  indent: number;
};

export type triggerV2GetLastMessage = {
  type: "v2GetLastMessage";
  outputVar: string;
  indent: number;
};

export type triggerV2GetMessageAtIndex = {
  type: "v2GetMessageAtIndex";
  index: string;
  indexType: "var" | "value";
  outputVar: string;
  indent: number;
};

export type triggerV2GetMessageCount = {
  type: "v2GetMessageCount";
  outputVar: string;
  indent: number;
};

export type triggerV2ModifyLorebook = {
  type: "v2ModifyLorebook";
  target: string;
  targetType: "var" | "value";
  value: string;
  valueType: "var" | "value";
  indent: number;
};

export type triggerV2GetLorebook = {
  type: "v2GetLorebook";
  target: string;
  targetType: "var" | "value";
  outputVar: string;
  indent: number;
};

export type triggerV2GetLorebookCount = {
  type: "v2GetLorebookCount";
  outputVar: string;
  indent: number;
};

export type triggerV2GetLorebookEntry = {
  type: "v2GetLorebookEntry";
  index: string;
  indexType: "var" | "value";
  outputVar: string;
  indent: number;
};

export type triggerV2SetLorebookActivation = {
  type: "v2SetLorebookActivation";
  index: string;
  indexType: "var" | "value";
  value: boolean;
  indent: number;
};

export type triggerV2GetLorebookIndexViaName = {
  type: "v2GetLorebookIndexViaName";
  name: string;
  nameType: "var" | "value";
  outputVar: string;
  indent: number;
};

export type triggerV2Random = {
  type: "v2Random";
  min: string;
  minType: "var" | "value";
  max: string;
  maxType: "var" | "value";
  outputVar: string;
  indent: number;
};

export type triggerV2GetCharAt = {
  type: "v2GetCharAt";
  source: string;
  sourceType: "var" | "value";
  index: string;
  indexType: "var" | "value";
  outputVar: string;
  indent: number;
};

export type triggerV2GetCharCount = {
  type: "v2GetCharCount";
  source: string;
  sourceType: "var" | "value";
  outputVar: string;
  indent: number;
};

export type triggerV2ToLowerCase = {
  type: "v2ToLowerCase";
  source: string;
  sourceType: "var" | "value";
  outputVar: string;
  indent: number;
};

export type triggerV2ToUpperCase = {
  type: "v2ToUpperCase";
  source: string;
  sourceType: "var" | "value";
  outputVar: string;
  indent: number;
};

export type triggerV2SetCharAt = {
  type: "v2SetCharAt";
  source: string;
  sourceType: "var" | "value";
  index: string;
  indexType: "var" | "value";
  value: string;
  valueType: "var" | "value";
  outputVar: string;
  indent: number;
};

export type triggerV2SplitString = {
  type: "v2SplitString";
  source: string;
  sourceType: "var" | "value";
  delimiter: string;
  delimiterType: "var" | "value";
  outputVar: string;
  indent: number;
};

export type triggerV2GetCharacterDesc = {
  type: "v2GetCharacterDesc";
  outputVar: string;
  indent: number;
};

export type triggerV2SetCharacterDesc = {
  type: "v2SetCharacterDesc";
  value: string;
  valueType: "var" | "value";
  indent: number;
};

export type triggerV2MakeArrayVar = {
  type: "v2MakeArrayVar";
  var: string;
  indent: number;
};

export type triggerV2GetArrayVarLength = {
  type: "v2GetArrayVarLength";
  var: string;
  outputVar: string;
  indent: number;
};

export type triggerV2GetArrayVar = {
  type: "v2GetArrayVar";
  var: string;
  index: string;
  indexType: "var" | "value";
  outputVar: string;
  indent: number;
};

export type triggerV2SetArrayVar = {
  type: "v2SetArrayVar";
  var: string;
  index: string;
  indexType: "var" | "value";
  value: string;
  valueType: "var" | "value";
  indent: number;
};

export type triggerV2PushArrayVar = {
  type: "v2PushArrayVar";
  var: string;
  value: string;
  valueType: "var" | "value";
  indent: number;
};

export type triggerV2PopArrayVar = {
  type: "v2PopArrayVar";
  var: string;
  outputVar: string;
  indent: number;
};

export type triggerV2ShiftArrayVar = {
  type: "v2ShiftArrayVar";
  var: string;
  outputVar: string;
  indent: number;
};

export type triggerV2UnshiftArrayVar = {
  type: "v2UnshiftArrayVar";
  var: string;
  value: string;
  valueType: "var" | "value";
  indent: number;
};

export type triggerV2SpliceArrayVar = {
  type: "v2SpliceArrayVar";
  var: string;
  start: string;
  startType: "var" | "value";
  item: string;
  itemType: "var" | "value";
  indent: number;
};

export type triggerV2SliceArrayVar = {
  type: "v2SliceArrayVar";
  var: string;
  start: string;
  startType: "var" | "value";
  end: string;
  endType: "var" | "value";
  outputVar: string;
  indent: number;
};

export type triggerV2GetIndexOfValueInArrayVar = {
  type: "v2GetIndexOfValueInArrayVar";
  var: string;
  value: string;
  valueType: "var" | "value";
  outputVar: string;
  indent: number;
};

export type triggerV2RemoveIndexFromArrayVar = {
  type: "v2RemoveIndexFromArrayVar";
  var: string;
  index: string;
  indexType: "var" | "value";
  indent: number;
};

export type triggerV2ConcatString = {
  type: "v2ConcatString";
  source1: string;
  source1Type: "var" | "value";
  source2: string;
  source2Type: "var" | "value";
  outputVar: string;
  indent: number;
};

export type triggerV2GetLastUserMessage = {
  type: "v2GetLastUserMessage";
  outputVar: string;
  indent: number;
};

export type triggerV2GetLastCharMessage = {
  type: "v2GetLastCharMessage";
  outputVar: string;
  indent: number;
};

export type triggerV2GetFirstMessage = {
  type: "v2GetFirstMessage";
  outputVar: string;
  indent: number;
};

export type triggerV2GetAlertInput = {
  type: "v2GetAlertInput";
  display: string;
  displayType: "var" | "value";
  outputVar: string;
  indent: number;
};

export type triggerV2GetDisplayState = {
  type: "v2GetDisplayState";
  outputVar: string;
  indent: number;
};

export type triggerV2SetDisplayState = {
  type: "v2SetDisplayState";
  value: string;
  valueType: "var" | "value";
  indent: number;
};

export type triggerV2GetRequestState = {
  type: "v2GetRequestState";
  outputVar: string;
  index: string;
  indexType: "var" | "value";
  indent: number;
};

export type triggerV2GetRequestStateRole = {
  type: "v2GetRequestStateRole";
  outputVar: string;
  index: string;
  indexType: "var" | "value";
  indent: number;
};

export type triggerV2SetRequestState = {
  type: "v2SetRequestState";
  value: string;
  valueType: "var" | "value";
  index: string;
  indexType: "var" | "value";
  indent: number;
};

export type triggerV2SetRequestStateRole = {
  type: "v2SetRequestStateRole";
  value: string;
  valueType: "var" | "value";
  index: string;
  indexType: "var" | "value";
  indent: number;
};

export type triggerV2GetReuqestStateLength = {
  type: "v2GetRequestStateLength";
  outputVar: string;
  indent: number;
};

export type triggerV2UpdateGUI = {
  type: "v2UpdateGUI";
  indent: number;
};

export type triggerV2Wait = {
  type: "v2Wait";
  value: string;
  valueType: "var" | "value";
  indent: number;
};

export type triggerV2IfAdvanced = {
  type: "v2IfAdvanced";
  condition:
    | "="
    | "!="
    | ">"
    | "<"
    | ">="
    | "<="
    | "≒"
    | "∋"
    | "∈"
    | "∌"
    | "∉"
    | "≡";
  targetType: "var" | "value";
  target: string;
  sourceType: "var" | "value";
  source: string;
  indent: number;
};

export type triggerV2QuickSearchChat = {
  type: "v2QuickSearchChat";
  value: string;
  valueType: "var" | "value";
  condition: "loose" | "strict" | "regex";
  depth: string;
  depthType: "var" | "value";
  outputVar: string;
  indent: number;
};

export type triggerV2StopPromptSending = {
  type: "v2StopPromptSending";
  indent: number;
};
