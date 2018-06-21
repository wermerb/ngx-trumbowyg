import { CustomButton } from './custom-button';

export interface TrumbowygOptions {
  prefix?: string;
  lang?: string;
  svgPath?: string | boolean;
  hideButtonTexts?: boolean;
  btns?: Array<string[]>;
  semantic?: boolean;
  resetCss?: boolean;
  removeformatPasted?: boolean;
  autogrow?: boolean;
  autogrowOnEnter?: boolean;
  plugins?: { [pluginName: string]: any };
  btnsDef?: { [buttonName: string]: CustomButton };
}
