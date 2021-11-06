import { CasualDB } from "../../deps.ts";
import { Schema, WidgetType } from "./schema.ts";

const db = new CasualDB<Schema>();
await db.connect("./pieptuta.db.json");

const dbSeed = async () => {
  await db.seed({
    articles: [
      {
        id: "1",
        title: "test",
        slug: "test",
        coverImage: "20211105-iris-face-twitch.png",
        description: "test",
        content: "test",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "2",
        title: "test 2",
        slug: "test-2",
        description: "test 2",
        content: "test 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "3",
        title: "test 3",
        slug: "test-3",
        description: "test 3",
        content: "test 3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "4",
        title: "test 4",
        slug: "test-4",
        description: "test 4",
        content: "test 4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    users: [
      { name: "hacktor" },
    ],
    widgets: [
      {
        region: "sidebar",
        type: WidgetType.DailyQuote,
        title: "Citatul Zilei",
        subtitle: "la fiecare 10 secunde",
        action: {
          type: "AutoRefresh",
        },
        data: [
          {
            text:
              "BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI",
            author: "Gheorghe Crăciun",
          },
          { text: "MEOW MEOW MEOW!!", author: "Pieptuța" },
          { text: "DA DA DA OTELU E VIATA MEA", author: "autor necunoscut" },
          {
            text:
              "Te urăsc, pe urmă te iubesc, iar te urăsc, pe urmă iar te iubesc...",
            author: "Gheorghe Crăciun",
          },
          { text: "Băgăm un bui cinstit", author: "iris_danciu" },
          { text: "Pulă seara, stimați pensionari!", author: "iris_danciu" },
          {
            text: "Hei păpușhe, mă lași să înot la tine ăn pisdă??",
            author: "iris_danciu",
          },
          { text: "F for biscuite", author: "hacktor_92" },
          { text: "mmm... muna", author: "văru vanu (out of context)" },
          { text: "Response Message", author: "StreamElements" },
          { text: "Porodici", author: "un ghinionist" },
          { text: "iris esti superba", author: "tot chatu'" },
        ],
      },
      {
        region: "sidebar",
        type: WidgetType.TwitchClip,
        title: "Random Twitch clip",
        action: {
          type: "ManualRefresh",
          data: {
            title: "Încarcă un alt clip random.",
          },
        },
        data: [
          "ThoughtfulCaringVultureBabyRage-mMpohQcq5b2EPuTM",
          "AdorableCarefulGazelleAsianGlow-7-DTuui-hteN5pPz",
          "BeautifulBlindingHawkLitty-eeSOHoEs7-CQFh7c",
          "PrettyCrowdedCrowDeIlluminati-NO5NT3uebuznAEcO",
          "UnsightlySilkyCoffeeBudBlast-zZFMVvmRKNeO0Qv8",
          "LaconicSplendidDiscBCouch-u0MdhA-_qPrsnjud",
          "ManlyRoundCardVoteYea-cws3dOJG8am4uonp",
          "CleanConcernedJellyfishRuleFive-5H9vCtTIhdowqK7W",
          "TrustworthyOptimisticPigJKanStyle-C6bSulBUbChPPF3c",
          "DelightfulTangibleSpiderWoofer-mrMIs12SvVCD4SAH",
          "BrightDeafWrenchDuDudu-npNXXnv5-gJGxY8p",
          "ConsiderateAbnegateLampPJSugar-lpKUtDBZ8Pc4-csr",
          "AbstemiousStormyPotPicoMause-X76Vh05RxLPA-JTS",
          "CuriousToughStarUncleNox-eXfjJey83n5qKfOT",
        ],
      },
    ],
  });
};

export { db, dbSeed };
