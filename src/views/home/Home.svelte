<script>
    import GroupLink from "../../components/GroupLink.svelte";
    import QuizFoot from "../exam/quiz-types/components/QuizFoot.svelte";
	import AppList from "./components/AppList.svelte";

</script>
<div class="view-home">
    <div class="layout">
        <div class="head">
            <h1>粳米团子</h1>
            <nav>
                <a href="https://kyoani.cn/" target="_blank">黄页</a>
                <!-- <a href="#/components">组件</a> -->
                <!-- <a href="#/about">关于</a> -->
            </nav>
        </div>
        <AppList />
    </div>
    <QuizFoot>
        <div style="font-size: 12px;">
            <a href="https://github.com/kyoani-cn/kumiko-sensei" target="_blank">GitHub</a>
            <span style="margin: 0 2px;color: #AAA;">·</span>
            <GroupLink>开发群</GroupLink>
        </div>
        <div style="font-size: 12px;">
            <a href="https://lab.magiconch.com/" target="_blank">神奇海螺试验场</a>
        </div>
    </QuizFoot>
</div>