<template>
    <div class="privacy">
        <h1>Privacy & Policy<p>プライバシーポリシー</p></h1>
        <div class="detail-polcy">
        Yoshio Tsukuda は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、個人情報保護の重要性の認識と取組みを徹底することにより、個人情報の保護を推進致します。

        <h3>個人情報の管理</h3>
        Yoshio Tsukuda は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。

        <h3>個人情報の利用目的</h3>
        お客さまからお預かりした個人情報は、各アプリ内でのデータ保存のみに利用します。

        <h3>個人情報の第三者への開示・提供の禁止</h3>
        Yoshio Tsukuda は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。 お客さまの同意がある場合 お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合 法令に基づき開示することが必要である場合

        <h3>個人情報の安全対策</h3>
        Yoshio Tsukuda は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。

        <h6>ご本人の照会</h6>

        お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。

        <h3>法令、規範の遵守と見直し</h3>
        Yoshio Tsukuda は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。

        <h3>お問い合せ</h3>
        Yoshio Tsukuda の個人情報の取扱に関するお問い合せは下記までご連絡ください。<br><br> Yoshio Tsukuda <a href="https://twitter.com/tukutuku_tukuyo">@tukutuku_tukuyo</a>

        </div>
    </div>
</template>


<style lang="scss">
.privacy {
    width: 60%;
    height: 40%;
    margin: 25vh 20vw;
    h1 {
        font-size: 3vw;
        margin-top: 0;
        margin-bottom: 10px;
    }
    h3 {
        margin-bottom: 10px;
    }
    p{
        font-size: 1vw;
    }
    .detail-polcy {
        width: 96%;
        height: 60%;
        overflow: scroll;
        border: 1px solid black;
        padding: 10px 10px  10px 10px;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
    }
}


/* smartphone */
@media only screen and (max-width:768px) {
.privacy {
    width: 70%;
    height: 80%;
    margin: 10vh 15vw;
    h1 {
        font-size: 5vw;
    }
    p{
        font-size: 3vw;
    }
    .detail-polcy {
        width: 100%;
        height: 80%;
        overflow: scroll;
        border: none;
        padding: 0;
        background-color: #ffffff00;
    }
}
}
</style>
