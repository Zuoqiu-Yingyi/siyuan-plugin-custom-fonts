// Copyright (C) 2023 Zuoqiu Yingyi
// 
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
// 
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

import manifest from "~/public/plugin.json";

import type { IConfig } from "@/types/config";

/* eslint-disable no-irregular-whitespace */
const DEFAULT_FONT_PREVIEW = `
|\`\`--==[[]]\\\\;;'',,..//~~!!@@##$$%%^^&&**(())__++{{}}||::""<<>>??|
|｀－＝［］＼；＇，．／￣！＠＃＄％＾＆＊（）＿＋｛｝｜：＂＜＞？|
|0011223344556677889900112233445566778899001122334455667788990011|
|０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１|
|aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzaabbccddeeff|
|ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚａｂｃｄｅｆ|
|AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZAABBCCDDEEFF|
|ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺＡＢＣＤＥＦ|
|零一二三四五六七八九零一二三四五六七八九零一二三四五六七八九零一|
|                                                                |
|　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　|
`.trim();
/* eslint-enable no-irregular-whitespace */

const FONT_FAMILY = [
    "Emojis Additional",
    "Emojis Reset",
    "BlinkMacSystemFont",
    "Helvetica",
    "Luxi Sans",
    "DejaVu Sans",
    "arial",
    "sans-serif",
    "emojis",
] as const;

const FONT_FAMILY_PROTYLE = [
    ...FONT_FAMILY,
] as const;

const FONT_FAMILY_CODE = [
    "Emojis Additional",
    "Emojis Reset",
    "JetBrainsMono-Regular",
    "mononoki",
    "Consolas",
    "Liberation Mono",
    ...FONT_FAMILY,
] as const;

const FONT_FAMILY_GRAPH = [
    "arial",
] as const;

const FONT_FAMILY_MATH = [
    "KaTeX_Math",
    // "KaTeX_Main",
    // "KaTeX_AMS",
    // "KaTeX_Caligraphic",
    // "KaTeX_Fraktur",
    // "KaTeX_SansSerif",
    // "KaTeX_Script",
    // "KaTeX_Size1",
    // "KaTeX_Size2",
    // "KaTeX_Size3",
    // "KaTeX_Size4",
    // "KaTeX_Typewriter",
] as const;

const FONT_FAMILY_EMOJI = [
    "Emojis Additional",
    "emojis",
] as const;


/* 默认配置选项 */
export const DEFAULT_CONFIG: IConfig = {
    css: {
        enable: true,
        code: `/* Twemoji Mozilla: https://github.com/mozilla/twemoji-colr */
@font-face {
    font-family: "Twemoji Mozilla";
    font-style: normal;
    src: url("plugins/${manifest.name}/static/fonts/Twemoji.Mozilla/Twemoji.Mozilla-0.7.0.ttf");
}
`,
    },
    fonts: {
        base: {
            enable: false,
            preview: DEFAULT_FONT_PREVIEW,
            list: [
                ...FONT_FAMILY,
            ],
        },
        editor: {
            enable: true,
            preview: DEFAULT_FONT_PREVIEW,
            list: [
                ...FONT_FAMILY_PROTYLE,
            ],
        },
        code: {
            enable: false,
            preview: DEFAULT_FONT_PREVIEW,
            list: [
                ...FONT_FAMILY_CODE,
            ],
        },
        graph: {
            enable: false,
            preview: DEFAULT_FONT_PREVIEW,
            list: [
                ...FONT_FAMILY_GRAPH,
            ],
        },
        math: {
            enable: false,
            preview: DEFAULT_FONT_PREVIEW,
            list: [
                ...FONT_FAMILY_MATH,
            ],
        },
        emoji: {
            enable: true,
            preview: DEFAULT_FONT_PREVIEW,
            list: [
                "Twemoji Mozilla",
                ...FONT_FAMILY_EMOJI,
            ],
        },
    },
    menu: {
        block: {
            enable: true,
            list: [
                "等线",
                "方正舒体",
                "方正姚体",
                "仿宋",
                "黑体",
                "华文彩云",
                "华文仿宋",
                "华文琥珀",
                "华文楷体",
                "华文隶书",
                "华文宋体",
                "华文细黑",
                "华文新魏",
                "华文行楷",
                "华文中宋",
                "楷体",
                "隶书",
                "宋体",
                "微软雅黑",
                "新宋体",
                "幼圆",
            ],
        },
    },
};
