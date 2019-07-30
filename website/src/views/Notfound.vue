<template>
    <div class="notfound">
        <h1>404 - Not Found.</h1>
        <p>指定されたページは見つかりませんでした．</p>
        <p>URLを確認してアクセスしてください．</p>
        <router-link to="/">TOPへ</router-link>
    </div>
    
</template>

<style lang="scss">
.notfound {
    width: 70%;
    height: 30%;
    margin: 20% auto; 
    a, a:visited {
        width: 100%;
        height: 20px;
        color: #000;
        font-size: 29px;
    }
}
</style>