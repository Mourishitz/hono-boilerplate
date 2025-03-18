import { VineString } from "@vinejs/vine";
import {
  uniqueRule,
  UniqueOptions,
} from "@/src/app/Requests/rules/uniqueRule";

declare module "@vinejs/vine" {
  interface VineString {
    unique(options: UniqueOptions): this;
  }
}

VineString.macro("unique", function(this: VineString, options: UniqueOptions) {
  return this.use(uniqueRule(options));
});
