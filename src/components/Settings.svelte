<!--
 Copyright (C) 2023 Zuoqiu Yingyi

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License as
 published by the Free Software Foundation, either version 3 of the
 License, or (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
-->

<!-- 设置面板 -->

<script lang="ts">
    import Input from "@workspace/components/siyuan/setting/item/Input.svelte";
    import { ItemType } from "@workspace/components/siyuan/setting/item/item";
    import Item from "@workspace/components/siyuan/setting/item/Item.svelte";
    import Panel from "@workspace/components/siyuan/setting/panel/Panel.svelte";
    import Panels from "@workspace/components/siyuan/setting/panel/Panels.svelte";
    import Tabs from "@workspace/components/siyuan/setting/tab/Tabs.svelte";

    import type { ITab } from "@workspace/components/siyuan/setting/tab";

    import type CustomFontsPlugin from "@/index";
    import type { IConfig } from "@/types/config";
    import type { I18N } from "@/utils/i18n";

    interface IProps {
        config: IConfig; // 传入的配置项
        plugin: InstanceType<typeof CustomFontsPlugin>; // 插件实例
        textareaHeight: number; // 文本框高度(px)
    }

    const {
        config,
        plugin,
        textareaHeight = 0,
    }: IProps = $props();

    const i18n = plugin.i18n as unknown as I18N;

    const base_font_family = "var(--b3-font-family)";
    const editor_font_family = "var(--b3-font-family-protyle)";
    const code_font_family = "var(--b3-font-family-code)";
    const graph_font_family = "var(--b3-font-family-graph)";
    const math_font_family = "var(--b3-font-family-math)";
    const emoji_font_family = "var(--b3-font-family-emoji)";

    function updated() {
        plugin.updateConfig(config);
    }

    function resetOptions() {
        plugin.siyuan.confirm(
            i18n.settings.generalSettings.reset.title, // 标题
            i18n.settings.generalSettings.reset.description, // 文本
            async () => {
                await plugin.resetConfig(); // 重置配置
                globalThis.location.reload(); // 刷新页面
            }, // 确认按钮回调
        );
    }

    const PanelKey = {
        general: "general",
        snippet: "snippet",
        fonts: "fonts",
        menu: "menu",
    } as const;

    const TabKey = {
        base: "base",
        editor: "editor",
        code: "code",
        graph: "graph",
        math: "math",
        emoji: "emoji",
    } as const;

    const panels_focus_key = PanelKey.general;

    const panels = [
        {
            key: PanelKey.general,
            text: i18n.settings.generalSettings.title,
            name: i18n.settings.generalSettings.title,
            icon: "#iconSettings",
        },
        {
            key: PanelKey.snippet,
            text: i18n.settings.cssSettings.title,
            name: i18n.settings.cssSettings.title,
            icon: "#iconCode",
        },
        {
            key: PanelKey.fonts,
            text: i18n.settings.fontsSettings.title,
            name: i18n.settings.fontsSettings.title,
            icon: "#iconFont",
        },
        {
            key: PanelKey.menu,
            text: i18n.settings.menuSettings.title,
            name: i18n.settings.menuSettings.title,
            icon: "#iconMenu",
        },
    ] as const satisfies ITab[];

    const fonts_settings_tabs_focus_key = TabKey.base;
    const tabs = {
        fonts: [
            {
                key: TabKey.base,
                text: i18n.settings.fontsSettings.base.title,
                name: i18n.settings.fontsSettings.base.title,
                icon: "🗛",
            },
            {
                key: TabKey.editor,
                text: i18n.settings.fontsSettings.editor.title,
                name: i18n.settings.fontsSettings.editor.title,
                icon: "🖺",
            },
            {
                key: TabKey.code,
                text: i18n.settings.fontsSettings.code.title,
                name: i18n.settings.fontsSettings.code.title,
                icon: "💻",
            },
            {
                key: TabKey.graph,
                text: i18n.settings.fontsSettings.graph.title,
                name: i18n.settings.fontsSettings.graph.title,
                icon: "📊",
            },
            {
                key: TabKey.math,
                text: i18n.settings.fontsSettings.math.title,
                name: i18n.settings.fontsSettings.math.title,
                icon: "🔢",
            },
            {
                key: TabKey.emoji,
                text: i18n.settings.fontsSettings.emoji.title,
                name: i18n.settings.fontsSettings.emoji.title,
                icon: "🙂",
            },
        ] as const satisfies ITab[],
    };
</script>

<Panels
    focus={panels_focus_key}
    {panels}
    let:focus={focusPanel}
>
    <!-- 常规设置面板 -->
    <Panel display={panels[0].key === focusPanel}>
        <!-- 重置设置 -->
        <Item
            text={i18n.settings.generalSettings.reset.description}
            title={i18n.settings.generalSettings.reset.title}
        >
            <Input
                slot="input"
                settingKey="Reset"
                settingValue={i18n.settings.generalSettings.reset.text}
                type={ItemType.button}
                on:clicked={resetOptions}
            />
        </Item>

        <!-- 查看系统字体 -->
        <Item
            text={i18n.settings.generalSettings.showSystemFonts.description}
            title={i18n.settings.generalSettings.showSystemFonts.title}
        >
            <Input
                slot="input"
                settingKey="showSystemFonts"
                settingValue={i18n.settings.generalSettings.showSystemFonts.text}
                type={ItemType.button}
                on:clicked={() => plugin.showSystemFonts()}
            />
        </Item>

        <!-- 查看可用字体 -->
        <Item
            text={i18n.settings.generalSettings.showUsableFonts.description}
            title={i18n.settings.generalSettings.showUsableFonts.title}
        >
            <Input
                slot="input"
                settingKey="showSystemFonts"
                settingValue={i18n.settings.generalSettings.showUsableFonts.text}
                type={ItemType.button}
                on:clicked={() => plugin.showUsableFonts()}
            />
        </Item>
    </Panel>

    <!-- CSS 片段设置面板 -->
    <Panel display={panels[1].key === focusPanel}>
        <!-- 是否启用 CSS 片段 -->
        <Item
            text={i18n.settings.cssSettings.enable.description}
            title={i18n.settings.cssSettings.enable.title}
        >
            <Input
                slot="input"
                settingKey="enable"
                settingValue={config.css.enable}
                type={ItemType.checkbox}
                on:changed={(e) => {
                    config.css.enable = e.detail.value;
                    updated();
                }}
            />
        </Item>

        <!-- CSS 片段输入框 -->
        <Item
            block={true}
            text={i18n.settings.cssSettings.snippet.description}
            title={i18n.settings.cssSettings.snippet.title}
        >
            <Input
                slot="input"
                block={true}
                height={textareaHeight}
                placeholder={i18n.settings.cssSettings.snippet.placeholder}
                settingKey="code"
                settingValue={config.css.code}
                type={ItemType.textarea}
                on:changed={(e) => {
                    config.css.code = e.detail.value;
                    updated();
                }}
            />
        </Item>
    </Panel>

    <!-- 字体设置面板 -->
    <Panel display={panels[2].key === focusPanel}>
        <Tabs
            focus={fonts_settings_tabs_focus_key}
            tabs={tabs.fonts}
            let:focus={focusTab}
        >
            <!-- 标签页 1 - 基础字体设置 -->
            <div
                class:fn__none={tabs.fonts[0].key !== focusTab}
                data-type={tabs.fonts[0].name}
            >
                <!-- 是否启用自定义字体列表 -->
                <Item
                    text={i18n.settings.fontsSettings.base.enable.description}
                    title={i18n.settings.fontsSettings.base.enable.title}
                >
                    <Input
                        slot="input"
                        settingKey="enable"
                        settingValue={config.fonts.base.enable}
                        type={ItemType.checkbox}
                        on:changed={(e) => {
                            config.fonts.base.enable = e.detail.value;
                            updated();
                        }}
                    />
                </Item>

                <!-- 字体样式预览 -->
                <Item
                    block={true}
                    text={i18n.settings.fontsSettings.preview.description}
                    title={i18n.settings.fontsSettings.preview.title}
                >
                    <Input
                        slot="input"
                        block={true}
                        fontFamily={base_font_family}
                        placeholder={i18n.settings.fontsSettings.preview.placeholder}
                        settingKey="preview"
                        settingValue={config.fonts.base.preview}
                        type={ItemType.textarea}
                        on:changed={(e) => {
                            config.fonts.base.preview = e.detail.value;
                            updated();
                        }}
                    />
                </Item>

                <!-- 自定义字体列表 -->
                <Item
                    block={true}
                    text={i18n.settings.fontsSettings.base.fontsList.description}
                    title={i18n.settings.fontsSettings.base.fontsList.title}
                >
                    <Input
                        slot="input"
                        block={true}
                        height={textareaHeight}
                        placeholder={i18n.settings.fontsSettings.base.fontsList.placeholder}
                        settingKey="list"
                        settingValue={config.fonts.base.list.join("\n")}
                        type={ItemType.textarea}
                        on:changed={(e) => {
                            if (e.detail.value === "") {
                                config.fonts.base.list = [];
                            }
                            else {
                                config.fonts.base.list = e.detail.value.split("\n");
                            }
                            updated();
                        }}
                    />
                </Item>
            </div>

            <!-- 标签页 2 - 编辑器字体设置 -->
            <div
                class:fn__none={tabs.fonts[1].key !== focusTab}
                data-type={tabs.fonts[1].name}
            >
                <!-- 是否启用自定义字体列表 -->
                <Item
                    text={i18n.settings.fontsSettings.editor.enable.description}
                    title={i18n.settings.fontsSettings.editor.enable.title}
                >
                    <Input
                        slot="input"
                        settingKey="enable"
                        settingValue={config.fonts.editor.enable}
                        type={ItemType.checkbox}
                        on:changed={(e) => {
                            config.fonts.editor.enable = e.detail.value;
                            updated();
                        }}
                    />
                </Item>

                <!-- 字体样式预览 -->
                <Item
                    block={true}
                    text={i18n.settings.fontsSettings.preview.description}
                    title={i18n.settings.fontsSettings.preview.title}
                >
                    <Input
                        slot="input"
                        block={true}
                        fontFamily={editor_font_family}
                        placeholder={i18n.settings.fontsSettings.preview.placeholder}
                        settingKey="preview"
                        settingValue={config.fonts.editor.preview}
                        type={ItemType.textarea}
                        on:changed={(e) => {
                            config.fonts.editor.preview = e.detail.value;
                            updated();
                        }}
                    />
                </Item>

                <!-- 自定义字体列表 -->
                <Item
                    block={true}
                    text={i18n.settings.fontsSettings.editor.fontsList.description}
                    title={i18n.settings.fontsSettings.editor.fontsList.title}
                >
                    <Input
                        slot="input"
                        block={true}
                        height={textareaHeight}
                        placeholder={i18n.settings.fontsSettings.editor.fontsList.placeholder}
                        settingKey="list"
                        settingValue={config.fonts.editor.list.join("\n")}
                        type={ItemType.textarea}
                        on:changed={(e) => {
                            if (e.detail.value === "") {
                                config.fonts.editor.list = [];
                            }
                            else {
                                config.fonts.editor.list = e.detail.value.split("\n");
                            }
                            updated();
                        }}
                    />
                </Item>
            </div>

            <!-- 标签页 3 - 代码字体设置 -->
            <div
                class:fn__none={tabs.fonts[2].key !== focusTab}
                data-type={tabs.fonts[2].name}
            >
                <!-- 是否启用自定义字体列表 -->
                <Item
                    text={i18n.settings.fontsSettings.code.enable.description}
                    title={i18n.settings.fontsSettings.code.enable.title}
                >
                    <Input
                        slot="input"
                        settingKey="enable"
                        settingValue={config.fonts.code.enable}
                        type={ItemType.checkbox}
                        on:changed={(e) => {
                            config.fonts.code.enable = e.detail.value;
                            updated();
                        }}
                    />
                </Item>

                <!-- 字体样式预览 -->
                <Item
                    block={true}
                    text={i18n.settings.fontsSettings.preview.description}
                    title={i18n.settings.fontsSettings.preview.title}
                >
                    <Input
                        slot="input"
                        block={true}
                        fontFamily={code_font_family}
                        placeholder={i18n.settings.fontsSettings.preview.placeholder}
                        settingKey="preview"
                        settingValue={config.fonts.code.preview}
                        type={ItemType.textarea}
                        on:changed={(e) => {
                            config.fonts.code.preview = e.detail.value;
                            updated();
                        }}
                    />
                </Item>

                <!-- 自定义字体列表 -->
                <Item
                    block={true}
                    text={i18n.settings.fontsSettings.code.fontsList.description}
                    title={i18n.settings.fontsSettings.code.fontsList.title}
                >
                    <Input
                        slot="input"
                        block={true}
                        height={textareaHeight}
                        placeholder={i18n.settings.fontsSettings.code.fontsList.placeholder}
                        settingKey="list"
                        settingValue={config.fonts.code.list.join("\n")}
                        type={ItemType.textarea}
                        on:changed={(e) => {
                            if (e.detail.value === "") {
                                config.fonts.code.list = [];
                            }
                            else {
                                config.fonts.code.list = e.detail.value.split("\n");
                            }
                            updated();
                        }}
                    />
                </Item>
            </div>

            <!-- 标签页 4 - 图表字体设置 -->
            <div
                class:fn__none={tabs.fonts[3].key !== focusTab}
                data-type={tabs.fonts[3].name}
            >
                <!-- 是否启用自定义字体列表 -->
                <Item
                    text={i18n.settings.fontsSettings.graph.enable.description}
                    title={i18n.settings.fontsSettings.graph.enable.title}
                >
                    <Input
                        slot="input"
                        settingKey="enable"
                        settingValue={config.fonts.graph.enable}
                        type={ItemType.checkbox}
                        on:changed={(e) => {
                            config.fonts.graph.enable = e.detail.value;
                            updated();
                        }}
                    />
                </Item>

                <!-- 字体样式预览 -->
                <Item
                    block={true}
                    text={i18n.settings.fontsSettings.preview.description}
                    title={i18n.settings.fontsSettings.preview.title}
                >
                    <Input
                        slot="input"
                        block={true}
                        fontFamily={graph_font_family}
                        placeholder={i18n.settings.fontsSettings.preview.placeholder}
                        settingKey="preview"
                        settingValue={config.fonts.graph.preview}
                        type={ItemType.textarea}
                        on:changed={(e) => {
                            config.fonts.graph.preview = e.detail.value;
                            updated();
                        }}
                    />
                </Item>

                <!-- 自定义字体列表 -->
                <Item
                    block={true}
                    text={i18n.settings.fontsSettings.graph.fontsList.description}
                    title={i18n.settings.fontsSettings.graph.fontsList.title}
                >
                    <Input
                        slot="input"
                        block={true}
                        height={textareaHeight}
                        placeholder={i18n.settings.fontsSettings.graph.fontsList.placeholder}
                        settingKey="list"
                        settingValue={config.fonts.graph.list.join("\n")}
                        type={ItemType.textarea}
                        on:changed={(e) => {
                            if (e.detail.value === "") {
                                config.fonts.graph.list = [];
                            }
                            else {
                                config.fonts.graph.list = e.detail.value.split("\n");
                            }
                            updated();
                        }}
                    />
                </Item>
            </div>

            <!-- 标签页 5 - 数学字体设置 -->
            <div
                class:fn__none={tabs.fonts[4].key !== focusTab}
                data-type={tabs.fonts[4].name}
            >
                <!-- 是否启用自定义字体列表 -->
                <Item
                    text={i18n.settings.fontsSettings.math.enable.description}
                    title={i18n.settings.fontsSettings.math.enable.title}
                >
                    <Input
                        slot="input"
                        settingKey="enable"
                        settingValue={config.fonts.math.enable}
                        type={ItemType.checkbox}
                        on:changed={(e) => {
                            config.fonts.math.enable = e.detail.value;
                            updated();
                        }}
                    />
                </Item>

                <!-- 字体样式预览 -->
                <Item
                    block={true}
                    text={i18n.settings.fontsSettings.preview.description}
                    title={i18n.settings.fontsSettings.preview.title}
                >
                    <Input
                        slot="input"
                        block={true}
                        fontFamily={math_font_family}
                        placeholder={i18n.settings.fontsSettings.preview.placeholder}
                        settingKey="preview"
                        settingValue={config.fonts.math.preview}
                        type={ItemType.textarea}
                        on:changed={(e) => {
                            config.fonts.math.preview = e.detail.value;
                            updated();
                        }}
                    />
                </Item>

                <!-- 自定义字体列表 -->
                <Item
                    block={true}
                    text={i18n.settings.fontsSettings.math.fontsList.description}
                    title={i18n.settings.fontsSettings.math.fontsList.title}
                >
                    <Input
                        slot="input"
                        block={true}
                        height={textareaHeight}
                        placeholder={i18n.settings.fontsSettings.math.fontsList.placeholder}
                        settingKey="list"
                        settingValue={config.fonts.math.list.join("\n")}
                        type={ItemType.textarea}
                        on:changed={(e) => {
                            if (e.detail.value === "") {
                                config.fonts.math.list = [];
                            }
                            else {
                                config.fonts.math.list = e.detail.value.split("\n");
                            }
                            updated();
                        }}
                    />
                </Item>
            </div>

            <!-- 标签页 6 - 表情符号字体设置 -->
            <div
                class:fn__none={tabs.fonts[5].key !== focusTab}
                data-type={tabs.fonts[5].name}
            >
                <!-- 是否启用自定义字体列表 -->
                <Item
                    text={i18n.settings.fontsSettings.emoji.enable.description}
                    title={i18n.settings.fontsSettings.emoji.enable.title}
                >
                    <Input
                        slot="input"
                        settingKey="enable"
                        settingValue={config.fonts.emoji.enable}
                        type={ItemType.checkbox}
                        on:changed={(e) => {
                            config.fonts.emoji.enable = e.detail.value;
                            updated();
                        }}
                    />
                </Item>

                <!-- 字体样式预览 -->
                <Item
                    block={true}
                    text={i18n.settings.fontsSettings.preview.description}
                    title={i18n.settings.fontsSettings.preview.title}
                >
                    <Input
                        slot="input"
                        block={true}
                        fontFamily={emoji_font_family}
                        placeholder={i18n.settings.fontsSettings.preview.placeholder}
                        settingKey="preview"
                        settingValue={config.fonts.emoji.preview}
                        type={ItemType.textarea}
                        on:changed={(e) => {
                            config.fonts.emoji.preview = e.detail.value;
                            updated();
                        }}
                    />
                </Item>

                <!-- 自定义字体列表 -->
                <Item
                    block={true}
                    text={i18n.settings.fontsSettings.emoji.fontsList.description}
                    title={i18n.settings.fontsSettings.emoji.fontsList.title}
                >
                    <Input
                        slot="input"
                        block={true}
                        height={textareaHeight}
                        placeholder={i18n.settings.fontsSettings.emoji.fontsList.placeholder}
                        settingKey="list"
                        settingValue={config.fonts.emoji.list.join("\n")}
                        type={ItemType.textarea}
                        on:changed={(e) => {
                            if (e.detail.value === "") {
                                config.fonts.emoji.list = [];
                            }
                            else {
                                config.fonts.emoji.list = e.detail.value.split("\n");
                            }
                            updated();
                        }}
                    />
                </Item>
            </div>
        </Tabs>
    </Panel>

    <!-- 块菜单设置面板 -->
    <Panel display={panels[3].key === focusPanel}>
        <!-- CSS 片段输入框 -->
        <Item
            block={true}
            text={i18n.settings.menuSettings.blockFontList.description}
            title={i18n.settings.menuSettings.blockFontList.title}
        >
            <Input
                slot="input"
                block={true}
                height={textareaHeight}
                placeholder={i18n.settings.menuSettings.blockFontList.placeholder}
                settingKey="list"
                settingValue={config.menu.block.list.join("\n")}
                type={ItemType.textarea}
                on:changed={(e) => {
                    if (e.detail.value === "") {
                        config.menu.block.list = [];
                    }
                    else {
                        config.menu.block.list = e.detail.value.split("\n");
                    }
                    updated();
                }}
            />
        </Item>
    </Panel>
</Panels>

<style lang="less">
</style>
