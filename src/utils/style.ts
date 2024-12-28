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

/**
 * 清洗字体名称
 * @param font - 字体名称
 * @returns 清洗后的字体名称(有效的 CSS 字体名称)
 */
export function washFontName(font: string): string {
    font = font.trim();

    switch (true) {
        case font.startsWith("\"") && font.endsWith("\""):
        case font.startsWith("\'") && font.endsWith("\'"):
            return font;

        default:
            return `"${font}"`;
    }
}

/**
 * 清洗字体列表
 * @param fonts - 字体名称列表
 * @returns 清洗后的字体名称(有效的 CSS 字体名称)
 */
export function washFontList(fonts: string[]): string[] {
    return fonts.filter((font) => !/^\s*$/.test(font)).map(washFontName);
}

/* eslint-disable tsdoc/syntax */
/**
 * 字体样式
 * @param fontList - 字体列表配置
 * @param fontList.base - 基础字体列表
 * @param fontList.editor - 编辑器字体列表
 * @param fontList.code - 代码字体列表
 * @param fontList.graph - 关系图字体列表
 * @param fontList.math - 数学公式字体列表
 * @param fontList.emoji - 表情符号字体列表
 * @return: css 代码
 */
export function fontFamilyStyle(fontList: {
    base?: string[];
    editor?: string[];
    code?: string[];
    graph?: string[];
    math?: string[];
    emoji?: string[];
}): string {
    const css: string[] = [];
    css.push(":root:root {");
    if (fontList.base && fontList.base.length > 0) {
        const base = washFontList(fontList.base);
        base.push("system-ui");
        css.push(`    --b3-font-family: ${base.join(", ")};`);
    }
    if (fontList.editor && fontList.editor.length > 0) {
        const editor = washFontList(fontList.editor);
        editor.push("sans-serif");
        css.push(`    --b3-font-family-protyle: ${editor.join(", ")};`);
    }
    if (fontList.code && fontList.code.length > 0) {
        const code = washFontList(fontList.code);
        code.push("monospace");
        css.push(`    --b3-font-family-code: ${code.join(", ")};`);
    }
    if (fontList.graph && fontList.graph.length > 0) {
        const graph = washFontList(fontList.graph);
        graph.push("serif");
        css.push(`    --b3-font-family-graph: ${graph.join(", ")};`);
    }
    if (fontList.math && fontList.math.length > 0) {
        const math = washFontList(fontList.math);
        math.push("math");
        css.push(`    --b3-font-family-math: ${math.join(", ")};`);
    }
    if (fontList.emoji && fontList.emoji.length > 0) {
        const emoji = washFontList(fontList.emoji);
        emoji.push("emoji");
        css.push(`    --b3-font-family-emoji: ${emoji.join(", ")};`);
    }
    css.push("}");
    return css.join("\n");
}
/* eslint-enable tsdoc/syntax */
