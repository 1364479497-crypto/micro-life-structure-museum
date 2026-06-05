import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const cells = [
  {
    id: "plant",
    image: "./assets/specimens/plant.png",
    thumbImage: "./assets/thumbs/plant.webp",
    modelUrl: "./assets/models/plant-cell.lite.glb",
    occursImage: "./assets/illustrations/occurs/plant.webp",
    microImages: [
      "./assets/illustrations/micro/plant-light.webp",
      "./assets/illustrations/micro/plant-stained.webp",
      "./assets/illustrations/micro/plant-electron.webp"
    ],
    title: "植物细胞",
    type: "真核细胞",
    accent: "#5f9e48",
    accentDark: "#2e6e34",
    thumb: "plant",
    compare: "动物细胞",
    compareType: "真核细胞",
    occurs: "叶片、茎尖与果肉组织",
    note: "植物细胞有坚固的细胞壁、巨大的中央液泡和叶绿体。它像一间自带太阳能板和储水仓的微型工厂，既能维持形状，也能通过光合作用制造有机物。",
    fun: "小知识：中央液泡常常占据成熟植物细胞体积的大部分。",
    micro: ["叶肉细胞", "染色切片", "电子显微"],
    microClass: "micro-plant",
    defaultPart: "细胞核",
    parts: [
      {
        name: "细胞核",
        tag: "遗传信息中枢",
        color: "#7454b8",
        image: "./assets/illustrations/organelle/plant-nucleus.webp",
        facts: { "直径": "约 5-10 微米", "位置": "多被液泡挤向一侧", "显微可见": "常规染色后可见" },
        note: "细胞核由核膜包裹，内部保存 DNA，并调控蛋白质合成和细胞活动。"
      },
      {
        name: "中央液泡",
        tag: "储水与维持膨压",
        color: "#6fc2d0",
        image: "./assets/illustrations/organelle/plant-vacuole.webp",
        facts: { "体积": "可占细胞 30%-80%", "内容物": "水、离子和代谢物", "功能": "维持细胞膨压" },
        note: "液泡能帮助植物细胞保持挺立，也参与废物隔离和物质储存。"
      },
      {
        name: "叶绿体",
        tag: "光合作用场所",
        color: "#72b84a",
        image: "./assets/illustrations/organelle/plant-chloroplast.webp",
        facts: { "色素": "叶绿素", "结构": "类囊体堆叠", "功能": "把光能转为化学能" },
        note: "叶绿体是植物细胞最鲜明的能量结构，内部的类囊体膜负责吸收光。"
      },
      {
        name: "线粒体",
        tag: "供能车间",
        color: "#df7e43",
        image: "./assets/illustrations/organelle/plant-mitochondrion.webp",
        facts: { "数量": "随代谢强度变化", "内膜": "形成嵴", "功能": "产生 ATP" },
        note: "线粒体通过细胞呼吸释放能量，为细胞活动提供 ATP。"
      },
      {
        name: "高尔基体",
        tag: "包装与分发",
        color: "#cc647d",
        image: "./assets/illustrations/organelle/plant-golgi.webp",
        facts: { "形态": "扁平膜囊", "任务": "修饰蛋白质", "去向": "膜、细胞壁或胞外" },
        note: "高尔基体像细胞内的分拣中心，负责加工和运输分子。"
      }
    ]
  },
  {
    id: "immune",
    image: "./assets/specimens/immune.png",
    thumbImage: "./assets/thumbs/immune.webp",
    modelUrl: "./assets/models/immune-cell.optimized.glb",
    occursImage: "./assets/illustrations/occurs/immune.png",
    microImages: [
      "./assets/illustrations/micro/immune-blood-smear.png",
      "./assets/illustrations/micro/immune-immunostain.png",
      "./assets/illustrations/micro/immune-granule-detail.png"
    ],
    title: "白细胞",
    type: "免疫细胞",
    accent: "#5d86c8",
    accentDark: "#315c96",
    thumb: "immune",
    compare: "红细胞",
    compareType: "血液细胞",
    occurs: "血液、淋巴与炎症组织",
    note: "白细胞是免疫系统的移动哨兵。它们能识别异常信号、吞噬外来颗粒，也能与其他免疫细胞协作发动防御。",
    fun: "小知识：中性粒细胞可以穿过毛细血管壁，抵达感染现场。",
    micro: ["血涂片", "免疫染色", "颗粒细节"],
    microClass: "micro-immune",
    defaultPart: "分叶细胞核",
    parts: [
      {
        name: "分叶细胞核",
        tag: "多瓣核形态",
        color: "#7454b8",
        image: "./assets/illustrations/organelle/immune-segmented-nucleus.png",
        facts: { "形态": "常见 2-5 个叶", "染色": "深紫色", "作用": "保存遗传信息" },
        note: "分叶核让白细胞在组织间移动时更灵活，是许多粒细胞的典型特征。"
      },
      {
        name: "颗粒",
        tag: "酶与信号分子",
        color: "#c95362",
        image: "./assets/illustrations/organelle/immune-granules.png",
        facts: { "内容物": "水解酶、抗菌肽", "释放": "受刺激后脱颗粒", "功能": "杀伤或调节免疫" },
        note: "颗粒中储存的分子能帮助白细胞快速处理病原体。"
      },
      {
        name: "细胞膜",
        tag: "识别与黏附界面",
        color: "#b9bfcb",
        image: "./assets/illustrations/organelle/immune-membrane.png",
        facts: { "受体": "趋化因子与抗原信号", "形态": "可变形", "任务": "迁移、吞噬、通信" },
        note: "白细胞的膜受体让它能追踪化学信号并贴附到血管壁。"
      }
    ]
  },
  {
    id: "neuron",
    image: "./assets/specimens/neuron.png",
    thumbImage: "./assets/thumbs/neuron.webp",
    modelUrl: "./assets/models/neuron-cell.glb",
    occursImage: "./assets/illustrations/occurs/neuron.png",
    microImages: [
      "./assets/illustrations/micro/neuron-nissl.png",
      "./assets/illustrations/micro/neuron-network.png",
      "./assets/illustrations/micro/neuron-axon-cross-section.png"
    ],
    title: "神经元",
    type: "神经细胞",
    accent: "#607bbb",
    accentDark: "#38558e",
    thumb: "neuron",
    compare: "肌细胞",
    compareType: "收缩组织",
    occurs: "脑、脊髓与外周神经",
    note: "神经元把电化学信号从一个区域传向另一个区域。树突负责接收，轴突负责远距离传递，髓鞘能显著提高传导速度。",
    fun: "小知识：有些运动神经元的轴突可以从脊髓一直延伸到脚趾。",
    micro: ["尼氏染色", "神经网络", "轴突横切"],
    microClass: "micro-neuron",
    defaultPart: "轴突",
    parts: [
      {
        name: "轴突",
        tag: "信号高速路",
        color: "#5d86c8",
        image: "./assets/illustrations/organelle/neuron-axon.png",
        facts: { "长度": "从毫米到超过一米", "包裹": "常见髓鞘", "方向": "多由胞体向外传递" },
        note: "轴突负责把动作电位传向突触末端，是神经通信的长距离线路。"
      },
      {
        name: "胞体",
        tag: "代谢核心",
        color: "#7454b8",
        image: "./assets/illustrations/organelle/neuron-soma.png",
        facts: { "包含": "细胞核与细胞器", "任务": "整合输入", "染色": "可见尼氏体" },
        note: "胞体维持神经元代谢，并把来自树突的信号整合成输出。"
      },
      {
        name: "树突",
        tag: "接收输入",
        color: "#8fb2d0",
        image: "./assets/illustrations/organelle/neuron-dendrite.png",
        facts: { "形态": "高度分支", "表面": "可有树突棘", "功能": "接收突触信号" },
        note: "树突像一片复杂的接收天线，决定神经元能听见多少邻近信号。"
      },
      {
        name: "髓鞘",
        tag: "绝缘加速",
        color: "#c8d8e2",
        image: "./assets/illustrations/organelle/neuron-myelin.png",
        facts: { "构成": "胶质细胞膜", "间隔": "郎飞结", "效果": "跳跃式传导" },
        note: "髓鞘让电信号沿轴突更快传播，也保护细长的轴突结构。"
      }
    ]
  },
  {
    id: "epithelial",
    image: "./assets/specimens/epithelial.png",
    thumbImage: "./assets/thumbs/epithelial.webp",
    modelUrl: "./assets/models/epithelial-cell.glb",
    occursImage: "./assets/illustrations/occurs/epithelial.png",
    microImages: [
      "./assets/illustrations/micro/epithelial-columnar.png",
      "./assets/illustrations/micro/epithelial-ciliated.png",
      "./assets/illustrations/micro/epithelial-section.png"
    ],
    title: "上皮细胞",
    type: "人体组织细胞",
    accent: "#c66a82",
    accentDark: "#9c3f58",
    thumb: "epithelial",
    compare: "结缔组织",
    compareType: "支持组织",
    occurs: "皮肤、肠道与呼吸道表面",
    note: "上皮细胞紧密排列成屏障，覆盖身体表面或管腔内壁。带纤毛的上皮还能推动黏液或液体，帮助清除颗粒。",
    fun: "小知识：小肠上皮细胞表面的微绒毛能大幅增加吸收面积。",
    micro: ["柱状上皮", "纤毛带", "组织切片"],
    microClass: "micro-epithelial",
    defaultPart: "纤毛",
    parts: [
      {
        name: "纤毛",
        tag: "表面摆动结构",
        color: "#d88fa0",
        image: "./assets/illustrations/organelle/epithelial-cilia.png",
        facts: { "位置": "细胞顶端", "运动": "协调摆动", "作用": "推动液体或黏液" },
        note: "纤毛像细胞表面的细小桨叶，在呼吸道中能把黏液向外推送。"
      },
      {
        name: "细胞核",
        tag: "遗传控制区",
        color: "#7454b8",
        image: "./assets/illustrations/organelle/epithelial-nucleus.png",
        facts: { "位置": "常偏基底侧", "形态": "椭圆或圆形", "可见": "染色后明显" },
        note: "上皮细胞核的位置和排列能帮助判断组织类型与健康状态。"
      },
      {
        name: "紧密连接",
        tag: "细胞间封条",
        color: "#e1b15d",
        image: "./assets/illustrations/organelle/epithelial-tight-junction.png",
        facts: { "位置": "相邻细胞之间", "功能": "限制物质旁路", "意义": "维持屏障" },
        note: "紧密连接让上皮层成为真正的屏障，控制哪些物质可以穿过。"
      }
    ]
  },
  {
    id: "bacteria",
    image: "./assets/specimens/bacteria.png",
    thumbImage: "./assets/thumbs/bacteria.webp",
    modelUrl: "./assets/models/bacteria-cell.glb",
    occursImage: "./assets/illustrations/occurs/bacteria.png",
    microImages: [
      "./assets/illustrations/micro/bacteria-smear.png",
      "./assets/illustrations/micro/bacteria-gram.png",
      "./assets/illustrations/micro/bacteria-sem.png"
    ],
    title: "细菌细胞",
    type: "原核细胞",
    accent: "#3aa889",
    accentDark: "#1d735f",
    thumb: "bacteria",
    compare: "动物细胞",
    compareType: "真核细胞",
    occurs: "土壤、水体、肠道与皮肤表面",
    note: "细菌没有被核膜包裹的细胞核，DNA 通常集中在拟核区域。它的结构紧凑，但能以惊人的速度适应环境。",
    fun: "小知识：人体肠道中生活着数量庞大的共生细菌。",
    micro: ["杆菌涂片", "革兰染色", "扫描电镜"],
    microClass: "micro-bacteria",
    defaultPart: "拟核",
    parts: [
      {
        name: "拟核",
        tag: "裸露基因组",
        color: "#7454b8",
        image: "./assets/illustrations/organelle/bacteria-nucleoid.png",
        facts: { "膜结构": "无核膜", "形态": "盘曲 DNA 区域", "功能": "遗传信息储存" },
        note: "拟核不是细胞核，而是原核细胞 DNA 高度盘曲后聚集的区域。"
      },
      {
        name: "细胞壁",
        tag: "形态支撑",
        color: "#3aa889",
        image: "./assets/illustrations/organelle/bacteria-cell-wall.png",
        facts: { "主要成分": "肽聚糖", "作用": "抗渗透压", "染色": "革兰染色相关" },
        note: "细胞壁决定许多细菌的形状，也是不少抗生素作用的目标。"
      },
      {
        name: "鞭毛",
        tag: "运动推进器",
        color: "#d08a3c",
        image: "./assets/illustrations/organelle/bacteria-flagellum.png",
        facts: { "位置": "可单端或周生", "驱动": "旋转运动", "功能": "趋化移动" },
        note: "鞭毛通过旋转推动细菌在液体环境中移动。"
      },
      {
        name: "核糖体",
        tag: "蛋白质工坊",
        color: "#e1b15d",
        image: "./assets/illustrations/organelle/bacteria-ribosome.png",
        facts: { "大小": "70S", "分布": "细胞质中", "功能": "翻译蛋白质" },
        note: "核糖体读取 mRNA 信息，把氨基酸组装成蛋白质。"
      }
    ]
  },
  {
    id: "animal",
    image: "./assets/specimens/animal.png",
    thumbImage: "./assets/thumbs/animal.webp",
    modelUrl: "./assets/models/animal-cell.glb",
    occursImage: "./assets/illustrations/occurs/animal.png",
    microImages: [
      "./assets/illustrations/micro/animal-tissue.png",
      "./assets/illustrations/micro/animal-fluorescence.png",
      "./assets/illustrations/micro/animal-ultrastructure.png"
    ],
    title: "动物细胞",
    type: "真核细胞",
    accent: "#a353a5",
    accentDark: "#733976",
    thumb: "animal",
    compare: "植物细胞",
    compareType: "真核细胞",
    occurs: "动物器官与各类组织",
    note: "动物细胞没有细胞壁和叶绿体，但内部细胞器分工细致。柔性的细胞膜让它能改变形状、移动或形成复杂组织。",
    fun: "小知识：人体内不同类型细胞的大小、寿命和形状差异非常大。",
    micro: ["组织细胞", "荧光染色", "超微结构"],
    microClass: "micro-animal",
    defaultPart: "细胞核",
    parts: [
      {
        name: "细胞核",
        tag: "遗传控制中心",
        color: "#7454b8",
        image: "./assets/illustrations/organelle/animal-nucleus.png",
        facts: { "位置": "常靠近中央", "结构": "核膜与核仁", "功能": "调控基因表达" },
        note: "动物细胞核管理遗传信息，是细胞命运和功能调控的重要节点。"
      },
      {
        name: "线粒体",
        tag: "能量转换器",
        color: "#df7e43",
        image: "./assets/illustrations/organelle/animal-mitochondrion.png",
        facts: { "功能": "产生 ATP", "特点": "双层膜", "数量": "高耗能细胞更多" },
        note: "线粒体数量会随细胞能量需求改变，肌肉和神经细胞中尤其重要。"
      },
      {
        name: "内质网",
        tag: "合成与运输网络",
        color: "#6b76c5",
        image: "./assets/illustrations/organelle/animal-er.png",
        facts: { "类型": "粗面与光面", "任务": "蛋白质和脂质合成", "连接": "常与核膜连续" },
        note: "内质网形成广阔的膜网络，把合成、折叠和运输连接起来。"
      },
      {
        name: "溶酶体",
        tag: "细胞回收站",
        color: "#d2a849",
        image: "./assets/illustrations/organelle/animal-lysosome.png",
        facts: { "环境": "酸性", "内容": "多种水解酶", "功能": "降解与回收" },
        note: "溶酶体能分解老旧细胞器和外来颗粒，维持细胞内部清洁。"
      }
    ]
  },
  {
    id: "muscle",
    image: "./assets/specimens/muscle.png",
    thumbImage: "./assets/thumbs/muscle.webp",
    modelUrl: "./assets/models/muscle-cell.glb",
    occursImage: "./assets/illustrations/occurs/muscle.png",
    microImages: [
      "./assets/illustrations/micro/muscle-striated.png",
      "./assets/illustrations/micro/muscle-bundle.png",
      "./assets/illustrations/micro/muscle-sarcomere.png"
    ],
    title: "肌细胞",
    type: "肌纤维",
    accent: "#c95362",
    accentDark: "#9a303e",
    thumb: "muscle",
    compare: "神经元",
    compareType: "信号细胞",
    occurs: "骨骼肌、心肌与平滑肌",
    note: "肌细胞内部充满平行排列的肌原纤维。肌节周期性排列形成横纹，收缩时蛋白丝相对滑动，把化学能转化为运动。",
    fun: "小知识：一条骨骼肌纤维可以包含多个细胞核。",
    micro: ["横纹肌", "染色肌束", "肌节超微"],
    microClass: "micro-muscle",
    defaultPart: "肌原纤维",
    parts: [
      {
        name: "肌原纤维",
        tag: "收缩线程",
        color: "#c95362",
        image: "./assets/illustrations/organelle/muscle-myofibril.png",
        facts: { "直径": "约 1 微米", "排列": "平行成束", "可见": "呈横纹" },
        note: "肌原纤维由重复肌节构成，是肌细胞真正产生收缩力的结构。"
      },
      {
        name: "肌膜",
        tag: "兴奋传导界面",
        color: "#d7a680",
        image: "./assets/illustrations/organelle/muscle-sarcolemma.png",
        facts: { "位置": "细胞外层", "作用": "传播电信号", "关联": "T 管系统" },
        note: "肌膜把神经输入转换为肌细胞内部的兴奋信号。"
      },
      {
        name: "线粒体",
        tag: "耐力能源",
        color: "#df7e43",
        image: "./assets/illustrations/organelle/muscle-mitochondrion.png",
        facts: { "分布": "肌原纤维之间", "功能": "供应 ATP", "数量": "耐力肌更多" },
        note: "运动时肌细胞能量需求很高，线粒体负责持续供应 ATP。"
      }
    ]
  }
];

const state = {
  screen: "gallery",
  cellIndex: 0,
  selectedPart: "细胞核",
  viewMode: "model",
  layerRenderMode: "gray",
  inspectorTab: "archive",
  evidenceTab: "micro",
  hallFilter: "all",
  hallSearch: "",
  crossSection: false,
  autoRotate: true,
  isolate: false,
  dimOthers: false,
  favorite: false,
  activePanel: "gallery",
  activeMicroIndex: 0,
  materialCellIndex: 0,
  materialPartIndex: 0,
  transition: 1,
  isStageSwitching: false
};

const els = {
  topNavButtons: [...document.querySelectorAll("[data-nav]")],
  specimenHall: document.querySelector("#specimen-hall"),
  exploreWorkspace: document.querySelector("#explore-workspace"),
  progressLabel: document.querySelector("#progress-label"),
  progressBar: document.querySelector("#progress-bar"),
  hallSearchInput: document.querySelector("#hall-search-input"),
  hallFilterList: document.querySelector("#hall-filter-list"),
  hallCardGrid: document.querySelector("#hall-card-grid"),
  guideButton: document.querySelector("#guide-button"),
  showcaseEntryButton: document.querySelector("#showcase-entry-button"),
  specimenUploadInput: document.querySelector("#specimen-upload-input"),
  cellList: document.querySelector("#cell-list"),
  organelleList: document.querySelector("#organelle-list"),
  cellTitle: document.querySelector("#cell-title"),
  cellType: document.querySelector("#cell-type"),
  stageGuidance: document.querySelector("#stage-guidance"),
  stageCurrentChip: document.querySelector("#stage-current-chip"),
  inspectorEmpty: document.querySelector("#inspector-empty"),
  inspectorDetail: document.querySelector("#inspector-detail"),
  quickPartList: document.querySelector("#quick-part-list"),
  inspectorTabs: document.querySelector("#inspector-tabs"),
  inspectorContent: document.querySelector("#inspector-content"),
  evidenceTabs: document.querySelector("#evidence-tabs"),
  evidenceContent: document.querySelector("#evidence-content"),
  evidenceCollapse: document.querySelector("#evidence-collapse"),
  evidenceLaunchButtons: [...document.querySelectorAll("[data-evidence-open]")],
  evidenceModalBackdrop: document.querySelector("#evidence-modal-backdrop"),
  evidenceModal: document.querySelector("#evidence-modal"),
  evidenceModalTitle: document.querySelector("#evidence-modal-title"),
  evidenceModalContent: document.querySelector("#evidence-modal-content"),
  evidenceModalClose: document.querySelector("#evidence-modal-close"),
  detailName: document.querySelector("#detail-name"),
  detailSubtitle: document.querySelector("#detail-subtitle"),
  detailFacts: document.querySelector("#detail-facts"),
  detailIcon: document.querySelector("#detail-icon"),
  bioNote: document.querySelector("#bio-note"),
  funFact: document.querySelector("#fun-fact"),
  micrographList: document.querySelector("#micrograph-list"),
  compareCard: document.querySelector("#compare-card"),
  occursVisual: document.querySelector("#occurs-visual"),
  labelLayer: document.querySelector("#label-layer"),
  layerModePanel: document.querySelector("#layer-mode-panel"),
  specimenImage: document.querySelector("#specimen-image"),
  canvasWrap: document.querySelector("#canvas-wrap"),
  stagePrevButton: document.querySelector("#stage-prev-button"),
  stageNextButton: document.querySelector("#stage-next-button"),
  labelsButton: document.querySelector("#labels-button"),
  rotateButton: document.querySelector("#rotate-button"),
  isolateButton: document.querySelector("#isolate-button"),
  hideButton: document.querySelector("#hide-button"),
  resetButton: document.querySelector("#reset-button"),
  screenshotButton: document.querySelector("#screenshot-button"),
  exportButton: document.querySelector("#export-button"),
  favoriteButton: document.querySelector("#favorite-button"),
  drawer: document.querySelector("#workspace-drawer"),
  drawerBackdrop: document.querySelector("#drawer-backdrop"),
  drawerContent: document.querySelector("#drawer-content"),
  drawerClose: document.querySelector("#drawer-close"),
  settingsBackdrop: document.querySelector("#settings-backdrop"),
  settingsModal: document.querySelector("#settings-modal"),
  settingsContent: document.querySelector("#settings-content"),
  settingsClose: document.querySelector("#settings-close"),
  onboardingBackdrop: document.querySelector("#onboarding-backdrop"),
  onboardingPrompt: document.querySelector("#onboarding-prompt"),
  onboardingClose: document.querySelector("#onboarding-close"),
  onboardingStart: document.querySelector("#onboarding-start"),
  onboardingStay: document.querySelector("#onboarding-stay"),
  materialBackdrop: document.querySelector("#material-backdrop"),
  materialCard: document.querySelector("#material-card"),
  materialContent: document.querySelector("#material-content"),
  toast: document.querySelector("#toast")
};

const wrap = document.querySelector("#canvas-wrap");
const canvas = document.querySelector("#cell-canvas");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setClearColor(0x000000, 0);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.02;
renderer.localClippingEnabled = true;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
camera.position.set(0, 5.8, 6.2);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.07;
controls.minDistance = 2.6;
controls.maxDistance = 12;
controls.enablePan = true;
controls.target.set(0, 0, 0);
controls.addEventListener("change", positionLabels);

const modelRoot = new THREE.Group();
scene.add(modelRoot);

const ambient = new THREE.HemisphereLight(0xfff0d6, 0x7c8a70, 1.92);
scene.add(ambient);
const key = new THREE.DirectionalLight(0xfff3dc, 2.72);
key.position.set(3.4, 7.5, 5.8);
scene.add(key);
const rim = new THREE.DirectionalLight(0xd1c0ff, 0.58);
rim.position.set(-4, 2.4, -4.6);
scene.add(rim);

let modelGroup = null;
let rebuildStart = performance.now();
let modelRequestId = 0;
const gltfLoader = new GLTFLoader();
gltfLoader.setCrossOrigin("anonymous");
const modelCache = new Map();
const onboardingStorageKey = "micro-life-hall-guide-seen:v3";
const preloadQueue = [];
const queuedPreloadIds = new Set();
let preloadActive = false;
const splitLayerCount = 4;
const splitNormalMatrix = new THREE.Matrix3();
const labelProjection = new THREE.Vector3();
const labelCenterProjection = new THREE.Vector3();
const defaultCameraPosition = new THREE.Vector3(0, 5.8, 6.2);
const defaultCameraTarget = new THREE.Vector3(0, 0, 0);
const splitCameraPosition = new THREE.Vector3(0, 2.0, 7.1);
const splitCameraTarget = new THREE.Vector3(0, 0.02, 0);
const cameraTween = {
  active: false,
  startedAt: 0,
  duration: 620,
  fromPosition: new THREE.Vector3(),
  fromTarget: new THREE.Vector3(),
  toPosition: new THREE.Vector3(),
  toTarget: new THREE.Vector3()
};
const stageSwitch = {
  phase: "idle",
  direction: 1,
  pendingIndex: null,
  startedAt: 0,
  duration: 560
};
let projectedLabelPoints = [];
const plantLabelAnchors = [
  [0.0, 0.24, 0.34],
  [-0.22, 0.08, 0.4],
  [-0.56, 0.14, 0.42],
  [0.34, 0.06, 0.36],
  [0.08, -0.1, 0.36]
];
const labelAnchorPresets = {
  plant: plantLabelAnchors,
  immune: [
    [-0.12, 0.22, 0.34],
    [0.28, -0.04, 0.34],
    [-0.34, -0.18, 0.28]
  ],
  neuron: [
    [0.3, -0.02, 0.3],
    [-0.18, 0.14, 0.34],
    [-0.62, 0.36, 0.32],
    [0.18, 0.02, 0.32]
  ],
  epithelial: [
    [0, 0.48, 0.32],
    [0.08, -0.22, 0.34],
    [0.34, 0.02, 0.34]
  ],
  bacteria: [
    [0, 0.02, 0.34],
    [-0.48, 0.04, 0.32],
    [0.58, -0.1, 0.3],
    [0.2, -0.12, 0.34]
  ],
  animal: [
    [0.18, 0.22, 0.34],
    [-0.34, -0.16, 0.34],
    [0.02, -0.02, 0.36],
    [0.28, -0.24, 0.32]
  ],
  muscle: [
    [0.08, 0.06, 0.32],
    [0.26, -0.22, 0.32],
    [-0.24, 0.36, 0.34]
  ]
};
const labelAnchorScaleFactors = {
  plant: 0.82,
  immune: 0.7,
  neuron: 0.76,
  epithelial: 0.74,
  bacteria: 0.8,
  animal: 0.74,
  muscle: 0.78
};
const centerLockedLabelRadii = {
  plant: [0.17, 0.15, 0.24, 0.22, 0.18],
  muscle: [0.16, 0.25, 0.19]
};
const centerLockedLabelAngles = {
  plant: [-1.3, 0.15, 2.75, -0.65, 1.05],
  muscle: [0.02, 0.78, -2.35]
};
const reusable = {
  sphere: new THREE.SphereGeometry(1, 48, 32),
  smallSphere: new THREE.SphereGeometry(1, 24, 16),
  cylinder: new THREE.CylinderGeometry(1, 1, 1, 32, 1),
  box: new THREE.BoxGeometry(1, 1, 1)
};

function currentCell() {
  return cells[state.cellIndex];
}

function selectedPartData() {
  const cell = currentCell();
  return cell.parts.find((part) => part.name === state.selectedPart) || cell.parts[0];
}

function currentCompareCell() {
  const cell = currentCell();
  return cells.find((item) => item.title === cell.compare) || cells[(state.cellIndex + 1) % cells.length];
}

const specimenFilters = [
  { id: "all", label: "全部", icon: "layout-grid" },
  { id: "eukaryote", label: "真核细胞", icon: "atom" },
  { id: "prokaryote", label: "原核细胞", icon: "bug" },
  { id: "plant", label: "植物", icon: "leaf" },
  { id: "animal", label: "动物", icon: "paw-print" },
  { id: "human", label: "人体组织", icon: "user-round" },
  { id: "immune", label: "免疫系统", icon: "shield-plus" }
];

const specimenCategories = {
  plant: ["eukaryote", "plant"],
  immune: ["eukaryote", "immune", "human"],
  neuron: ["eukaryote", "animal"],
  epithelial: ["eukaryote", "human"],
  bacteria: ["prokaryote"],
  animal: ["eukaryote", "animal"],
  muscle: ["eukaryote", "human", "animal"]
};

const structureGroups = [
  { id: "boundary", name: "外部边界", icon: "shield", names: ["细胞壁", "细胞膜", "肌膜"] },
  { id: "genetic", name: "遗传与控制", icon: "dna", names: ["细胞核", "拟核", "胞体", "分叶细胞核"] },
  { id: "energy", name: "能量与合成", icon: "zap", names: ["叶绿体", "线粒体", "内质网", "高尔基体", "核糖体", "溶酶体"] },
  { id: "storage", name: "储存与运输", icon: "boxes", names: ["中央液泡", "轴突", "树突", "髓鞘", "纤毛", "紧密连接", "鞭毛", "肌原纤维", "颗粒"] }
];

function specimenProgress(cell) {
  const explored = cell.id === "plant" ? 3 : cell.id === "animal" ? 2 : cell.id === "bacteria" ? 1 : 0;
  const total = Math.max(cell.parts.length + (cell.id === "plant" ? 3 : 2), 4);
  const status = explored === 0 ? "not_started" : explored >= total ? "completed" : "in_progress";
  return { explored, total, status };
}

function specimenStatusCopy(cell, isCurrent = false) {
  if (isCurrent) return "当前";
  const progress = specimenProgress(cell);
  if (progress.status === "not_started") return "未开始";
  if (progress.status === "completed") return "完成";
  return "继续";
}

function selectedPartIndex(cell = currentCell()) {
  return Math.max(0, cell.parts.findIndex((part) => part.name === state.selectedPart));
}

function structureExplored(part, index = selectedPartIndex()) {
  return part.name === state.selectedPart || index <= selectedPartIndex();
}

function groupParts(cell = currentCell()) {
  const used = new Set();
  const groups = structureGroups.map((group) => {
    const parts = cell.parts.filter((part) => group.names.includes(part.name));
    parts.forEach((part) => used.add(part.name));
    return { ...group, parts };
  });
  const rest = cell.parts.filter((part) => !used.has(part.name));
  if (rest.length) groups.push({ id: "other", name: "其他结构", icon: "circle-ellipsis", parts: rest });
  return groups.filter((group) => group.parts.length);
}

const inspectorTabIds = new Set(["archive", "evidence", "directory"]);

function normalizeInspectorTab(tab) {
  return inspectorTabIds.has(tab) ? tab : "archive";
}

function syncInspectorPanels() {
  state.inspectorTab = normalizeInspectorTab(state.inspectorTab);
  els.inspectorTabs?.querySelectorAll("[data-inspector-tab]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.inspectorTab === state.inspectorTab);
  });
  document.querySelectorAll("[data-inspector-panel]").forEach((panel) => {
    panel.classList.toggle("is-hidden", panel.dataset.inspectorPanel !== state.inspectorTab);
  });
  updateEvidenceLaunchState();
}

function updateEvidenceLaunchState() {
  const order = ["micro", "compare", "task"];
  const activeIndex = Math.max(0, order.indexOf(state.evidenceTab));
  document.querySelectorAll("[data-evidence-open]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.evidenceOpen === state.evidenceTab);
  });
  document.querySelectorAll("[data-evidence-step]").forEach((step) => {
    const stepIndex = order.indexOf(step.dataset.evidenceStep);
    step.classList.toggle("is-active", stepIndex === activeIndex);
    step.classList.toggle("is-done", stepIndex >= 0 && stepIndex < activeIndex);
    step.classList.toggle("is-todo", stepIndex > activeIndex);
  });
}

function noteStorageKey() {
  return `cell-notes:${currentCell().id}`;
}

function getStoredNote() {
  try {
    return localStorage.getItem(noteStorageKey()) || "";
  } catch {
    return "";
  }
}

function setStoredNote(value) {
  try {
    localStorage.setItem(noteStorageKey(), value);
  } catch {
    showToast("浏览器当前无法保存笔记");
  }
}

function scheduleIdleWork(callback, timeout = 1800) {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(callback, { timeout });
    return;
  }
  window.setTimeout(callback, 260);
}

function resetPreparedModelVisualState(group) {
  if (!group) return;
  group.visible = true;
  group.position.set(0, 0, 0);
  group.rotation.set(0, 0, 0);

  const splitRoot = group.userData.splitRoot;
  if (splitRoot) {
    splitRoot.visible = false;
    splitRoot.userData.progress = 0;
    (splitRoot.userData.layers || []).forEach((layer) => {
      const base = layer.userData.basePosition;
      if (base) layer.position.copy(base);
    });
  }

  if (group.userData.content) group.userData.content.visible = true;
  group.userData.splitActive = false;
}

function detachCurrentModel({ dispose = false } = {}) {
  if (!modelGroup) return;
  const previous = modelGroup;
  modelRoot.remove(previous);
  modelGroup = null;
  if (dispose && !previous.userData.cachedModel) disposeSceneObject(previous);
}

function attachPreparedModel(group, requestId) {
  if (requestId !== modelRequestId) return false;
  if (group.parent) group.parent.remove(group);
  resetPreparedModelVisualState(group);
  modelGroup = group;
  modelRoot.add(group);
  els.canvasWrap.classList.add("has-live-model");
  els.canvasWrap.classList.remove("is-loading-live-model");
  rebuildStart = performance.now();
  updateStageModeState();
  if (state.isolate) focusSelectedPart();
  scheduleNearbyModelPreloads(state.cellIndex);
  return true;
}

function loadPreparedModel(cell) {
  const cached = modelCache.get(cell.id);
  if (cached?.group) return Promise.resolve(cached.group);
  if (cached?.promise) return cached.promise;

  if (!cell.modelUrl) {
    const generated = builders[cell.id]();
    generated.userData.labelAnchors = createLabelAnchors(cell, 1.25);
    generated.add(generated.userData.labelAnchors);
    generated.userData.cachedModel = true;
    generated.userData.cacheKey = cell.id;
    modelCache.set(cell.id, { group: generated, promise: null });
    return Promise.resolve(generated);
  }

  const promise = new Promise((resolve, reject) => {
    gltfLoader.load(
      cell.modelUrl,
      (gltf) => {
        try {
          const loadedGroup = prepareLoadedModel(gltf.scene, cell);
          loadedGroup.userData.cachedModel = true;
          loadedGroup.userData.cacheKey = cell.id;
          modelCache.set(cell.id, { group: loadedGroup, promise: null });
          resolve(loadedGroup);
        } catch (error) {
          disposeSceneObject(gltf.scene);
          modelCache.delete(cell.id);
          reject(error);
        }
      },
      undefined,
      (error) => {
        modelCache.delete(cell.id);
        reject(error);
      }
    );
  });

  modelCache.set(cell.id, { group: null, promise });
  return promise;
}

function queueModelPreload(cell) {
  if (!cell?.modelUrl || cell.id === currentCell().id) return;
  if (queuedPreloadIds.has(cell.id)) return;
  const cached = modelCache.get(cell.id);
  if (cached?.group || cached?.promise) return;
  queuedPreloadIds.add(cell.id);
  preloadQueue.push(cell);
}

function pumpModelPreloadQueue() {
  if (preloadActive || !preloadQueue.length) return;
  scheduleIdleWork(() => {
    const cell = preloadQueue.shift();
    if (!cell) return;
    queuedPreloadIds.delete(cell.id);
    const cached = modelCache.get(cell.id);
    if (cached?.group || cached?.promise) {
      pumpModelPreloadQueue();
      return;
    }
    preloadActive = true;
    loadPreparedModel(cell)
      .catch((error) => console.warn(`Preload failed for ${cell.title}`, error))
      .finally(() => {
        preloadActive = false;
        window.setTimeout(pumpModelPreloadQueue, 900);
      });
  }, 2200);
}

function scheduleNearbyModelPreloads(centerIndex = state.cellIndex) {
  [1, -1, 2, -2, 3, -3].forEach((offset) => {
    const index = normalizeCellIndex(centerIndex + offset);
    if (index !== centerIndex) queueModelPreload(cells[index]);
  });
  pumpModelPreloadQueue();
}

function normalizeCellIndex(index) {
  return (index + cells.length) % cells.length;
}

function updateCellSwitchControls() {
  els.stagePrevButton.disabled = state.isStageSwitching;
  els.stageNextButton.disabled = state.isStageSwitching;
  els.canvasWrap.classList.toggle("is-stage-switching", state.isStageSwitching);
  els.cellList.querySelectorAll(".cell-card").forEach((button) => {
    button.disabled = state.isStageSwitching;
  });
}

function applyCellSwitch(index, options = {}) {
  state.cellIndex = normalizeCellIndex(index);
  resetObservationState();
  updateAll();
  if (options.toast !== false) showToast(`已切换到${currentCell().title}`);
}

function switchCellTo(index, options = {}) {
  const nextIndex = normalizeCellIndex(index);
  if (nextIndex === state.cellIndex) return;
  state.isStageSwitching = false;
  stageSwitch.phase = "idle";
  stageSwitch.pendingIndex = null;
  els.canvasWrap.removeAttribute("data-switch-direction");
  applyCellSwitch(nextIndex, options);
}

function selectPart(partName, options = {}) {
  if (!partName || partName === state.selectedPart) {
    if (partName) state.inspectorTab = normalizeInspectorTab(options.inspectorTab || state.inspectorTab);
    updateHeader();
    updateToolbar();
    updateLabels();
    updateDetail();
    renderEvidenceContent();
    renderEvidenceModalContent();
    if (options.focus || state.isolate) focusSelectedPart();
    return;
  }
  state.selectedPart = partName;
  state.inspectorTab = normalizeInspectorTab(options.inspectorTab || "archive");
  updateHeader();
  updateDetail();
  renderOrganelleList();
  updateLabels();
  updateModelMaterials();
  updateToolbar();
  renderActivePanel();
  renderEvidenceContent();
  renderEvidenceModalContent();
  renderSpecimenHall();
  updateProgress();
  if (options.focus || state.isolate) focusSelectedPart();
  if (options.toast !== false) showToast(`已定位到${partName}`);
}

function resetObservationState(options = {}) {
  if (options.resetPart !== false) state.selectedPart = currentCell().defaultPart;
  state.viewMode = "model";
  state.layerRenderMode = "gray";
  state.crossSection = false;
  state.autoRotate = true;
  state.isolate = false;
  state.dimOthers = false;
  state.inspectorTab = "archive";
  state.evidenceTab = "micro";
  if (options.resetMicro !== false) state.activeMicroIndex = 0;
  resetCamera();
}

function setTheme(cell) {
  document.documentElement.style.setProperty("--accent", cell.accent);
  document.documentElement.style.setProperty("--accent-dark", cell.accentDark);
  document.documentElement.style.setProperty("--accent-soft", mixHex(cell.accent, "#ffffff", 0.78));
}

function mixHex(a, b, weight) {
  const ah = a.replace("#", "");
  const bh = b.replace("#", "");
  const ar = parseInt(ah.slice(0, 2), 16);
  const ag = parseInt(ah.slice(2, 4), 16);
  const ab = parseInt(ah.slice(4, 6), 16);
  const br = parseInt(bh.slice(0, 2), 16);
  const bg = parseInt(bh.slice(2, 4), 16);
  const bb = parseInt(bh.slice(4, 6), 16);
  const r = Math.round(ar * (1 - weight) + br * weight);
  const g = Math.round(ag * (1 - weight) + bg * weight);
  const bl = Math.round(ab * (1 - weight) + bb * weight);
  return `#${[r, g, bl].map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}

function material(color, options = {}) {
  const mat = new THREE.MeshPhysicalMaterial({
    color,
    roughness: options.roughness ?? 0.72,
    metalness: 0,
    clearcoat: options.clearcoat ?? 0.18,
    clearcoatRoughness: 0.88,
    transmission: 0,
    transparent: options.transparent ?? false,
    opacity: options.opacity ?? 1,
    side: options.side ?? THREE.FrontSide
  });
  mat.userData.baseColor = new THREE.Color(color);
  mat.userData.baseOpacity = mat.opacity;
  return mat;
}

function makeMesh(geometry, mat, part, options = {}) {
  const mesh = new THREE.Mesh(geometry, mat);
  mesh.castShadow = false;
  mesh.receiveShadow = false;
  mesh.userData.part = part;
  mesh.userData.shell = Boolean(options.shell);
  mesh.userData.dimTarget = options.dimTarget ?? 0.18;
  return mesh;
}

function ellipsoid(part, color, scale, position, options = {}) {
  const mesh = makeMesh(reusable.sphere, material(color, options), part, options);
  mesh.scale.set(scale[0], scale[1], scale[2]);
  mesh.position.set(position[0], position[1], position[2]);
  if (options.rotation) mesh.rotation.set(options.rotation[0], options.rotation[1], options.rotation[2]);
  return mesh;
}

function cylinder(part, color, radius, length, position, rotation = [0, 0, 0], options = {}) {
  const geo = new THREE.CylinderGeometry(radius, radius, length, 36, 1, options.openEnded ?? false);
  const mesh = makeMesh(geo, material(color, options), part, options);
  mesh.position.set(position[0], position[1], position[2]);
  mesh.rotation.set(rotation[0], rotation[1], rotation[2]);
  return mesh;
}

function capsule(part, color, radius, length, position, rotation = [0, 0, Math.PI / 2], options = {}) {
  const geo = new THREE.CapsuleGeometry(radius, length, 12, 30);
  const mesh = makeMesh(geo, material(color, options), part, options);
  mesh.position.set(position[0], position[1], position[2]);
  mesh.rotation.set(rotation[0], rotation[1], rotation[2]);
  return mesh;
}

function tube(part, color, points, radius = 0.04, options = {}) {
  const curve = new THREE.CatmullRomCurve3(points.map((point) => new THREE.Vector3(point[0], point[1], point[2])));
  const geo = new THREE.TubeGeometry(curve, 42, radius, 10, false);
  return makeMesh(geo, material(color, options), part, options);
}

function addMito(group, x, y, z, scale = 1) {
  const mito = ellipsoid("线粒体", "#df7e43", [0.35 * scale, 0.18 * scale, 0.18 * scale], [x, y, z], {
    rotation: [0.2, 0.3, -0.4],
    roughness: 0.62
  });
  group.add(mito);
  group.add(tube("线粒体", "#8b3f2a", [[x - 0.22 * scale, y, z + 0.03], [x - 0.06 * scale, y + 0.06 * scale, z], [x + 0.08 * scale, y - 0.05 * scale, z], [x + 0.24 * scale, y + 0.03 * scale, z]], 0.018 * scale));
}

function addChloroplast(group, x, y, z, rotation = 0) {
  const base = ellipsoid("叶绿体", "#72b84a", [0.48, 0.18, 0.2], [x, y, z], {
    rotation: [0.1, rotation, 0.2]
  });
  group.add(base);
  for (let i = -1; i <= 1; i += 1) {
    group.add(cylinder("叶绿体", "#3e7f3a", 0.035, 0.55, [x + i * 0.12, y + 0.01, z + 0.03], [Math.PI / 2, 0, rotation + 0.2]));
  }
}

function buildPlant() {
  const group = new THREE.Group();
  const wall = capsule("细胞壁", "#82a95b", 1.58, 3.55, [0, -0.08, 0], [0, 0, Math.PI / 2], {
    transparent: true,
    opacity: state.crossSection ? 0.36 : 0.58,
    shell: true,
    side: THREE.DoubleSide
  });
  wall.scale.set(1.45, 0.8, 0.28);
  group.add(wall);
  group.add(ellipsoid("中央液泡", "#80c9d3", [1.08, 0.52, 0.22], [-0.35, -0.04, 0.1], {
    transparent: true,
    opacity: 0.76
  }));
  group.add(ellipsoid("细胞核", "#7454b8", [0.55, 0.55, 0.44], [1.1, 0.45, 0.24], { roughness: 0.55 }));
  group.add(ellipsoid("细胞核", "#9d66df", [0.18, 0.18, 0.16], [1.22, 0.42, 0.56], { roughness: 0.45 }));
  addChloroplast(group, -1.75, 0.52, 0.22, 0.9);
  addChloroplast(group, 1.72, -0.42, 0.18, -0.4);
  addChloroplast(group, -1.52, -0.56, 0.16, 0.2);
  addMito(group, -0.95, -0.72, 0.26, 1.1);
  addMito(group, 0.74, -0.72, 0.22, 0.9);
  for (let i = 0; i < 5; i += 1) {
    group.add(tube("高尔基体", "#cc647d", [[0.72, 0.2 - i * 0.08, 0.42], [0.98, 0.26 - i * 0.08, 0.5], [1.28, 0.2 - i * 0.08, 0.44]], 0.035));
  }
  scatterSpheres(group, "核糖体", "#cba54d", 22, 2.2, 1.1, 0.03);
  group.rotation.set(-0.25, -0.5, 0.06);
  return group;
}

function buildImmune() {
  const group = new THREE.Group();
  const membrane = ellipsoid("细胞膜", "#d9dbe5", [1.75, 1.55, 0.95], [0, 0, 0], {
    transparent: true,
    opacity: state.crossSection ? 0.38 : 0.68,
    shell: true,
    side: THREE.DoubleSide
  });
  group.add(membrane);
  const lobePositions = [[-0.45, 0.2, 0.38], [0.05, 0.42, 0.42], [0.48, 0.08, 0.4], [-0.1, -0.25, 0.42]];
  lobePositions.forEach((pos) => group.add(ellipsoid("分叶细胞核", "#7454b8", [0.42, 0.34, 0.24], pos, { roughness: 0.6 })));
  for (let i = 0; i < lobePositions.length - 1; i += 1) {
    const a = lobePositions[i];
    const b = lobePositions[i + 1];
    group.add(tube("分叶细胞核", "#5d3c91", [a, [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, 0.44], b], 0.06));
  }
  scatterSpheres(group, "颗粒", "#c95362", 55, 1.45, 1.18, 0.045);
  scatterSpheres(group, "颗粒", "#5d86c8", 28, 1.3, 1.05, 0.035);
  group.rotation.set(-0.15, 0.4, -0.08);
  return group;
}

function buildNeuron() {
  const group = new THREE.Group();
  group.scale.set(0.9, 0.9, 0.9);
  group.add(ellipsoid("胞体", "#7454b8", [0.62, 0.55, 0.42], [-1.25, 0, 0.18], { roughness: 0.62 }));
  group.add(ellipsoid("胞体", "#9b68dc", [0.24, 0.22, 0.18], [-1.22, 0.03, 0.49]));
  const dendrites = [
    [[-1.64, 0.24, 0.12], [-2.35, 0.8, 0.08], [-3.05, 1.03, 0.02]],
    [[-1.65, -0.02, 0.08], [-2.42, 0.08, 0.08], [-3.3, 0.0, 0.02]],
    [[-1.53, -0.32, 0.1], [-2.25, -0.78, 0.06], [-2.9, -1.1, 0]],
    [[-1.12, 0.52, 0.08], [-1.32, 1.08, 0.06], [-1.55, 1.52, 0.02]],
    [[-0.95, -0.48, 0.08], [-0.92, -1.05, 0.05], [-1.18, -1.45, 0]]
  ];
  dendrites.forEach((branch) => {
    group.add(tube("树突", "#8fb2d0", branch, 0.055));
    const tip = branch[branch.length - 1];
    group.add(ellipsoid("树突", "#9e78c5", [0.09, 0.09, 0.09], tip));
  });
  group.add(tube("轴突", "#5d86c8", [[-0.62, -0.02, 0.08], [0.2, 0.08, 0.05], [1.1, -0.04, 0.03], [2.1, 0.02, 0.02], [3.2, -0.06, 0]], 0.08));
  for (let i = 0; i < 5; i += 1) {
    group.add(capsule("髓鞘", "#c8d8e2", 0.16, 0.32, [0.42 + i * 0.53, 0.02 * (i % 2 ? -1 : 1), 0.04], [0, 0, Math.PI / 2], { roughness: 0.58 }));
  }
  const axonEnds = [
    [[3.15, -0.06, 0], [3.72, 0.34, 0], [4.15, 0.56, 0]],
    [[3.1, -0.08, 0], [3.74, -0.36, 0], [4.1, -0.56, 0]],
    [[3.1, -0.06, 0], [3.68, 0.0, 0], [4.2, 0.0, 0]]
  ];
  axonEnds.forEach((branch) => {
    group.add(tube("轴突", "#8856b8", branch, 0.045));
    group.add(ellipsoid("轴突", "#b76bc4", [0.08, 0.08, 0.08], branch[branch.length - 1]));
  });
  group.rotation.set(-0.05, -0.25, 0.05);
  return group;
}

function buildEpithelial() {
  const group = new THREE.Group();
  const body = makeMesh(reusable.box, material("#dc9aa7", {
    transparent: true,
    opacity: state.crossSection ? 0.44 : 0.72,
    shell: true
  }), "细胞膜", { shell: true });
  body.scale.set(1.65, 1.45, 0.82);
  body.position.set(0, -0.12, 0);
  group.add(body);
  group.add(ellipsoid("细胞核", "#7454b8", [0.48, 0.42, 0.32], [0, -0.18, 0.45]));
  for (let i = -7; i <= 7; i += 1) {
    group.add(tube("纤毛", "#d88fa0", [[i * 0.18, 1.35, 0.18], [i * 0.18 + 0.04, 1.75, 0.14], [i * 0.18 - 0.02, 1.98, 0.08]], 0.028));
  }
  for (let i = -3; i <= 3; i += 1) {
    group.add(cylinder("紧密连接", "#e1b15d", 0.025, 1.52, [i * 0.5, 0.9, 0.84], [Math.PI / 2, 0, 0]));
  }
  addMito(group, -0.74, -0.64, 0.55, 0.72);
  addMito(group, 0.76, 0.18, 0.52, 0.72);
  group.rotation.set(-0.22, -0.45, 0);
  return group;
}

function buildBacteria() {
  const group = new THREE.Group();
  const wall = capsule("细胞壁", "#58b8ad", 0.72, 3.35, [0, 0, 0], [0, 0, Math.PI / 2], {
    transparent: true,
    opacity: state.crossSection ? 0.42 : 0.7,
    shell: true,
    side: THREE.DoubleSide
  });
  wall.scale.set(1.35, 0.82, 0.58);
  group.add(wall);
  group.add(capsule("细胞壁", "#235f69", 0.55, 3.05, [0, 0, 0.03], [0, 0, Math.PI / 2], {
    transparent: true,
    opacity: 0.34,
    shell: true
  }));
  group.add(tube("拟核", "#7454b8", [[-1.1, 0.02, 0.34], [-0.62, 0.33, 0.4], [-0.18, -0.18, 0.38], [0.36, 0.28, 0.39], [0.9, -0.02, 0.34]], 0.13, { roughness: 0.56 }));
  scatterSpheres(group, "核糖体", "#e1b15d", 52, 1.85, 0.52, 0.045);
  group.add(tube("鞭毛", "#d08a3c", [[2.2, -0.1, 0.05], [2.85, -0.42, 0.02], [3.22, -0.9, 0], [3.75, -0.68, 0.02]], 0.045));
  for (let i = -6; i <= 6; i += 1) {
    const x = i * 0.33;
    group.add(tube("菌毛", "#bd76a5", [[x, 0.67, 0.16], [x + 0.04, 0.98, 0.16]], 0.032));
    if (i % 2 === 0) group.add(tube("菌毛", "#bd76a5", [[x, -0.67, 0.13], [x - 0.05, -0.98, 0.12]], 0.032));
  }
  group.rotation.set(-0.12, -0.08, 0);
  return group;
}

function buildAnimal() {
  const group = new THREE.Group();
  const membrane = ellipsoid("细胞膜", "#7995d2", [1.88, 1.25, 0.82], [0, 0, 0], {
    transparent: true,
    opacity: state.crossSection ? 0.34 : 0.62,
    shell: true,
    side: THREE.DoubleSide
  });
  group.add(membrane);
  group.add(ellipsoid("细胞核", "#7454b8", [0.58, 0.52, 0.4], [0.58, 0.24, 0.36]));
  addMito(group, -0.62, -0.52, 0.35, 1);
  addMito(group, 1.02, -0.34, 0.32, 0.9);
  for (let i = 0; i < 6; i += 1) {
    group.add(tube("内质网", "#6b76c5", [[0.2 + i * 0.06, 0.08 - i * 0.08, 0.35], [0.62 + i * 0.04, -0.05 - i * 0.08, 0.45], [0.92 + i * 0.02, 0.05 - i * 0.08, 0.35]], 0.035));
  }
  for (let i = 0; i < 7; i += 1) {
    const angle = (i / 7) * Math.PI * 2;
    group.add(ellipsoid("溶酶体", "#d2a849", [0.12, 0.12, 0.1], [Math.cos(angle) * 1.05, Math.sin(angle) * 0.7, 0.36]));
  }
  scatterSpheres(group, "囊泡", "#c76b9f", 24, 1.45, 0.86, 0.045);
  group.rotation.set(-0.2, -0.5, 0.06);
  return group;
}

function buildMuscle() {
  const group = new THREE.Group();
  const membrane = capsule("肌膜", "#d79a8b", 0.72, 4.3, [0, 0, 0], [0, 0, Math.PI / 2], {
    transparent: true,
    opacity: state.crossSection ? 0.32 : 0.58,
    shell: true,
    side: THREE.DoubleSide
  });
  membrane.scale.set(1.35, 0.74, 0.58);
  group.add(membrane);
  for (let row = -1; row <= 1; row += 1) {
    const y = row * 0.38;
    const fiber = capsule("肌原纤维", "#c95362", 0.14, 4.28, [0, y, 0.3], [0, 0, Math.PI / 2], { roughness: 0.64 });
    group.add(fiber);
    for (let i = -5; i <= 5; i += 1) {
      group.add(cylinder("肌原纤维", "#762f50", 0.015, 0.34, [i * 0.36, y, 0.46], [0, 0, 0]));
    }
  }
  for (let i = -1; i <= 1; i += 1) {
    group.add(ellipsoid("线粒体", "#df7e43", [0.26, 0.15, 0.12], [-1.3 + i * 1.3, 0.72, 0.38], { rotation: [0.2, 0.2, 0.4] }));
  }
  for (let i = -4; i <= 4; i += 1) {
    group.add(tube("肌膜", "#f1d1bd", [[i * 0.48, -0.72, 0.4], [i * 0.48 + 0.06, 0.72, 0.4]], 0.032));
  }
  group.rotation.set(-0.18, -0.35, 0);
  return group;
}

function scatterSpheres(group, part, color, count, rx, ry, radius) {
  for (let i = 0; i < count; i += 1) {
    const a = (i * 2.399963) % (Math.PI * 2);
    const r = Math.sqrt((i + 0.5) / count);
    const x = Math.cos(a) * rx * r;
    const y = Math.sin(a) * ry * r;
    const z = 0.25 + ((i % 7) / 7) * 0.25;
    const dot = ellipsoid(part, color, [radius, radius, radius], [x, y, z], { roughness: 0.7 });
    group.add(dot);
  }
}

const builders = {
  plant: buildPlant,
  immune: buildImmune,
  neuron: buildNeuron,
  epithelial: buildEpithelial,
  bacteria: buildBacteria,
  animal: buildAnimal,
  muscle: buildMuscle
};

function disposeSceneObject(object) {
  if (!object) return;
  const disposedGeometries = new Set();
  const disposedMaterials = new Set();
  const disposedTextures = new Set();
  const disposeMaterial = (mat) => {
    if (!mat || disposedMaterials.has(mat)) return;
    disposedMaterials.add(mat);
    ["map", "normalMap", "roughnessMap", "metalnessMap", "aoMap", "emissiveMap"].forEach((key) => {
      if (mat[key] && !disposedTextures.has(mat[key])) {
        disposedTextures.add(mat[key]);
        mat[key].dispose();
      }
    });
    mat.dispose();
  };
  object.traverse((obj) => {
    if (obj.geometry && !Object.values(reusable).includes(obj.geometry) && !disposedGeometries.has(obj.geometry)) {
      disposedGeometries.add(obj.geometry);
      obj.geometry.dispose();
    }
    forEachMaterial(obj.material, disposeMaterial);
    forEachMaterial(obj.userData.originalMaterial, disposeMaterial);
    Object.values(obj.userData.layerMaterials || {}).forEach(disposeMaterial);
  });
}

function cloneMaterialSet(material) {
  if (Array.isArray(material)) return material.map((mat) => mat.clone());
  return material.clone();
}

function forEachMaterial(material, callback) {
  (Array.isArray(material) ? material : [material]).filter(Boolean).forEach(callback);
}

function colorFromUserData(value, fallback) {
  if (value && Number.isFinite(value.r) && Number.isFinite(value.g) && Number.isFinite(value.b)) {
    return new THREE.Color(value.r, value.g, value.b);
  }
  return fallback ? fallback.clone() : new THREE.Color(0xffffff);
}

function prepareLoadedMaterial(mat) {
  mat.userData.baseOpacity = mat.opacity ?? 1;
  mat.userData.loadedGltfMaterial = true;
  if (mat.map) {
    mat.map.colorSpace = THREE.SRGBColorSpace;
    mat.map.needsUpdate = true;
  }
  if (mat.color) {
    const savedBaseColor = colorFromUserData(mat.userData.baseColor, mat.color);
    mat.color.copy(savedBaseColor);
    if (mat.map && mat.color.r + mat.color.g + mat.color.b < 0.08) {
      mat.color.setRGB(0.93, 0.93, 0.93);
    } else if (!mat.userData.colorTunedForStage) {
      mat.color.multiplyScalar(0.93);
      mat.userData.colorTunedForStage = true;
    }
    mat.userData.baseColor = mat.color.clone();
  } else {
    mat.userData.baseColor = new THREE.Color(0xffffff);
  }
  if ("envMapIntensity" in mat) mat.envMapIntensity = 0.22;
  if ("specularIntensity" in mat) mat.specularIntensity = 0.48;
  if (mat.specularColor) mat.specularColor.setRGB(0.66, 0.62, 0.56);
  if ("roughness" in mat) mat.roughness = Math.max(mat.roughness ?? 0.64, 0.64);
  mat.side = THREE.DoubleSide;
  mat.needsUpdate = true;
}

function makeLayerMaterial(sourceMaterial, mode, splitSide = null) {
  const source = Array.isArray(sourceMaterial) ? sourceMaterial[0] : sourceMaterial;
  const clippingPlanes = Array.isArray(splitSide) ? splitSide : null;
  let mat;
  if (mode === "normal") {
    mat = new THREE.MeshNormalMaterial({
      side: THREE.DoubleSide,
      clippingPlanes
    });
  } else if (mode === "relief") {
    mat = new THREE.MeshStandardMaterial({
      color: 0xbfc6b5,
      roughness: 0.9,
      metalness: 0.02,
      normalMap: source?.normalMap || null,
      normalScale: new THREE.Vector2(2.2, 2.2),
      side: THREE.DoubleSide,
      clippingPlanes
    });
  } else {
    mat = new THREE.MeshStandardMaterial({
      color: 0xbfc0ba,
      roughness: 0.82,
      metalness: 0.02,
      side: THREE.DoubleSide,
      clippingPlanes
    });
  }
  mat.userData.generatedLayerMaterial = true;
  return mat;
}

function setupLayerMaterials(mesh, splitSide = null) {
  const original = mesh.material;
  mesh.userData.originalMaterial = original;
  mesh.userData.layerMaterials = {
    gray: makeLayerMaterial(original, "gray", splitSide),
    normal: makeLayerMaterial(original, "normal", splitSide),
    relief: makeLayerMaterial(original, "relief", splitSide)
  };
}

function createSplitModel(content) {
  const splitRoot = new THREE.Group();
  splitRoot.name = "split-model";
  const bounds = content.userData.splitBoundsY || { min: -0.2, max: 0.2 };
  const height = Math.max(0.001, bounds.max - bounds.min);
  const layerHeight = height / splitLayerCount;
  const layerOffsets = [-0.24, -0.08, 0.08, 0.24];
  const layers = Array.from({ length: splitLayerCount }, (_, index) => {
    const clone = content.clone(true);
    const lower = bounds.min + layerHeight * index;
    const upper = index === splitLayerCount - 1 ? bounds.max : bounds.min + layerHeight * (index + 1);
    const worldPlanes = [new THREE.Plane(), new THREE.Plane()];
    clone.name = `split-layer-${index + 1}`;
    clone.userData.isSplitLayer = true;
    clone.userData.splitLayerIndex = index;
    clone.userData.basePosition = clone.position.clone();
    clone.userData.layerOffset = layerOffsets[index] ?? (0.2 - index * 0.14);
    clone.userData.localPlanes = [
      new THREE.Plane(new THREE.Vector3(0, 1, 0), -lower),
      new THREE.Plane(new THREE.Vector3(0, -1, 0), upper)
    ];
    clone.userData.worldPlanes = worldPlanes;
    clone.traverse((obj) => {
      if (!obj.isMesh || !obj.material) return;
      obj.userData.isSplitClone = true;
      obj.userData.splitLayerIndex = index;
      obj.userData.splitWorldPlanes = worldPlanes;
      obj.material = cloneMaterialSet(obj.material);
      forEachMaterial(obj.material, (mat) => {
        prepareLoadedMaterial(mat);
        mat.side = THREE.DoubleSide;
        mat.clippingPlanes = worldPlanes;
        mat.clipShadows = true;
        mat.needsUpdate = true;
      });
      setupLayerMaterials(obj, worldPlanes);
    });
    return clone;
  });
  splitRoot.add(...layers);
  splitRoot.visible = false;
  splitRoot.userData.layers = layers;
  splitRoot.userData.splitBoundsY = bounds;
  splitRoot.userData.progress = 0;
  return splitRoot;
}

function createLabelAnchors(cell, radius = 1) {
  const anchors = new THREE.Group();
  anchors.name = "label-anchors";
  const positions = labelAnchorPresets[cell.id] || [
    [-0.3, 0.2, 0.44],
    [0.18, 0.12, 0.46],
    [0.34, -0.08, 0.42],
    [-0.12, -0.18, 0.44],
    [0.02, 0.28, 0.45]
  ];
  const scale = Math.max(0.6, radius * (labelAnchorScaleFactors[cell.id] || 0.76));
  cell.parts.slice(0, 5).forEach((part, index) => {
    const anchor = new THREE.Object3D();
    const position = positions[index] || [0, 0, 0];
    anchor.position.set(position[0] * scale, position[1] * scale, position[2] * scale);
    anchor.userData.part = part;
    anchors.add(anchor);
  });
  return anchors;
}

function updateStageModeState() {
  const isLayerMode = state.viewMode === "layers";
  const isLabelMode = state.viewMode === "labels";
  controls.enableRotate = !state.isStageSwitching;
  controls.enablePan = !state.isStageSwitching;
  els.canvasWrap.classList.toggle("is-layer-mode", isLayerMode);
  els.canvasWrap.classList.toggle("is-label-mode", isLabelMode);
  els.canvasWrap.classList.toggle("is-focus-mode", state.isolate);
  els.canvasWrap.classList.toggle("is-dim-mode", state.dimOthers);
  els.layerModePanel?.querySelectorAll(".layer-mode-chip").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.layerRender === state.layerRenderMode);
  });
  updateModelMaterials();
  positionLabels();
}

function prepareLoadedModel(model, cell = currentCell()) {
  const box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  model.position.sub(center);
  const maxDim = Math.max(size.x, size.y, size.z);
  model.userData.splitCenterY = center.y;
  model.userData.splitBoundsY = { min: box.min.y, max: box.max.y };
  model.traverse((obj) => {
    if (!obj.isMesh || !obj.material) return;
    obj.frustumCulled = true;
    const materials = Array.isArray(obj.material) ? obj.material : [obj.material];
    materials.filter(Boolean).forEach((mat) => {
      prepareLoadedMaterial(mat);
    });
    setupLayerMaterials(obj);
  });
  const wrapper = new THREE.Group();
  const orientationRoot = new THREE.Group();
  orientationRoot.rotation.set(-0.04, -0.46, 0.02);
  const splitRoot = createSplitModel(model);
  orientationRoot.add(model);
  orientationRoot.add(splitRoot);
  const orientedBox = new THREE.Box3().setFromObject(orientationRoot);
  const orientedSize = orientedBox.getSize(new THREE.Vector3());
  const orientedMaxDim = Math.max(orientedSize.x, orientedSize.y, orientedSize.z, maxDim);
  const orientedSphere = orientedBox.getBoundingSphere(new THREE.Sphere());
  wrapper.userData.stageScale = orientedMaxDim > 0 ? 4.05 / orientedMaxDim : 1;
  wrapper.userData.stageRadius = Math.max(orientedSphere.radius, orientedMaxDim * 0.5, 1);
  wrapper.userData.loadedGltf = true;
  wrapper.userData.splitCenterY = center.y;
  wrapper.userData.splitBoundsY = model.userData.splitBoundsY;
  wrapper.userData.content = model;
  wrapper.userData.orientationRoot = orientationRoot;
  wrapper.userData.splitRoot = splitRoot;
  wrapper.userData.labelAnchors = createLabelAnchors(cell, wrapper.userData.stageRadius);
  orientationRoot.add(wrapper.userData.labelAnchors);
  wrapper.add(orientationRoot);
  return wrapper;
}

function getTargetStageScale(group = modelGroup) {
  if (!group) return 1;
  return group.userData.stageScale || (currentCell().id === "neuron" ? 0.92 : 1.02);
}

function rebuildModel() {
  const requestId = ++modelRequestId;
  const cell = currentCell();
  detachCurrentModel({ dispose: true });
  els.canvasWrap.classList.remove("has-live-model");
  els.canvasWrap.classList.toggle("is-loading-live-model", Boolean(cell.modelUrl));
  rebuildStart = performance.now();

  if (cell.modelUrl) {
    loadPreparedModel(cell)
      .then((loadedGroup) => {
        attachPreparedModel(loadedGroup, requestId);
      })
      .catch((error) => {
        console.warn("GLB load failed, falling back to generated specimen image.", error);
        if (requestId === modelRequestId) {
          els.canvasWrap.classList.remove("has-live-model");
          els.canvasWrap.classList.remove("is-loading-live-model");
          state.isStageSwitching = false;
          stageSwitch.phase = "idle";
          stageSwitch.pendingIndex = null;
          updateCellSwitchControls();
          updateToolbar();
        }
      });
    return;
  }

  loadPreparedModel(cell).then((loadedGroup) => {
    attachPreparedModel(loadedGroup, requestId);
  });
}

function updateModelMaterials() {
  const part = selectedPartData();
  if (!modelGroup) return;
  const isLoadedGltf = Boolean(modelGroup.userData.loadedGltf);
  const splitActive = isLoadedGltf && Boolean(modelGroup.userData.splitActive);
  const wantsLayerMaterial = isLoadedGltf && state.dimOthers;
  modelGroup.traverse((obj) => {
    if (!obj.isMesh || !obj.material) return;
    const isSelected = obj.userData.part === part.name;
    const isSplitClone = Boolean(obj.userData.isSplitClone);
    const keepVisible = isLoadedGltf
      ? (splitActive ? isSplitClone : !isSplitClone)
      : true;
    obj.visible = keepVisible;

    if (isLoadedGltf) {
      obj.material = wantsLayerMaterial
        ? obj.userData.layerMaterials?.[state.layerRenderMode] || obj.material
        : obj.userData.originalMaterial || obj.material;
    }

    forEachMaterial(obj.material, (mat) => {
      const baseColor = colorFromUserData(mat.userData.baseColor, mat.color || new THREE.Color(0xffffff));
      const baseOpacity = mat.userData.baseOpacity ?? 1;
      if (!mat.userData.generatedLayerMaterial && mat.color) mat.color.copy(baseColor);
      if (mat.emissive) {
        mat.emissive.set(isSelected && !isLoadedGltf ? part.color : 0x000000);
        mat.emissiveIntensity = isSelected && !isLoadedGltf ? 0.08 : 0;
      }
      if (isLoadedGltf) {
        mat.clippingPlanes = isSplitClone ? obj.userData.splitWorldPlanes || null : null;
        mat.opacity = mat.userData.generatedLayerMaterial ? 1 : baseOpacity;
        mat.transparent = mat.userData.generatedLayerMaterial ? false : baseOpacity < 1;
        mat.needsUpdate = true;
      } else if (obj.userData.shell) {
        mat.opacity = state.crossSection ? Math.min(baseOpacity, 0.38) : Math.max(baseOpacity, 0.58);
        mat.transparent = true;
      } else if (state.dimOthers && !isSelected) {
        mat.opacity = obj.userData.dimTarget || 0.18;
        mat.transparent = true;
      } else {
        mat.opacity = baseOpacity;
        mat.transparent = baseOpacity < 1;
      }
    });
  });
}

function customSpecimenImage(title) {
  const safeTitle = String(title || "自定义标本")
    .slice(0, 18)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#eef7e8"/>
          <stop offset="1" stop-color="#fff8ef"/>
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#34422f" flood-opacity=".18"/>
        </filter>
      </defs>
      <rect width="640" height="360" rx="34" fill="url(#bg)"/>
      <g filter="url(#shadow)" transform="translate(320 170)">
        <path d="M-96-54 0-106 96-54 0-2z" fill="#cbf2c7" stroke="#004737" stroke-width="8" stroke-linejoin="round"/>
        <path d="M-96-54v108L0 106V-2z" fill="#a7db9a" stroke="#004737" stroke-width="8" stroke-linejoin="round"/>
        <path d="M96-54v108L0 106V-2z" fill="#dcf5d9" stroke="#004737" stroke-width="8" stroke-linejoin="round"/>
        <circle cx="0" cy="-2" r="24" fill="#004737"/>
      </g>
      <text x="320" y="304" text-anchor="middle" fill="#004737" font-family="PingFang SC, Microsoft YaHei, sans-serif" font-size="34" font-weight="700">${safeTitle}</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function createCustomCell(file) {
  const rawName = file.name.replace(/\.[^.]+$/, "").trim() || "我的 3D 标本";
  const id = `custom-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const image = customSpecimenImage(rawName);
  return {
    id,
    image,
    thumbImage: image,
    modelUrl: URL.createObjectURL(file),
    occursImage: null,
    microImages: [],
    title: rawName,
    type: "自定义标本",
    accent: "#004737",
    accentDark: "#004737",
    thumb: "custom",
    compare: "植物细胞",
    compareType: "参考标本",
    occurs: "用户上传的 GLB 模型",
    note: "这是你上传的自定义 3D 标本，可以进入 3D 展示旋转观察，并继续补充结构说明与课堂笔记。",
    fun: "小知识：自定义模型会保留在当前页面会话中，刷新页面后需要重新上传。",
    micro: ["模型视图", "结构观察", "课堂备注"],
    microClass: "micro-custom",
    defaultPart: "自定义模型",
    parts: [
      {
        name: "自定义模型",
        tag: "用户上传",
        color: "#004737",
        image,
        facts: { "来源": "本地 GLB 文件", "状态": "已上传", "用途": "3D 展示与观察" },
        note: "你可以把模型作为课堂演示素材使用，后续可继续补充结构标签、显微证据和观察任务。"
      }
    ],
    custom: true
  };
}

function handleSpecimenUpload(file) {
  if (!file) return;
  if (!file.name.toLowerCase().endsWith(".glb")) {
    showToast("请上传 .glb 格式的 3D 模型");
    return;
  }
  const customCell = createCustomCell(file);
  cells.push(customCell);
  specimenCategories[customCell.id] = ["custom"];
  state.cellIndex = cells.length - 1;
  state.selectedPart = customCell.defaultPart;
  state.hallFilter = "all";
  state.hallSearch = "";
  if (els.hallSearchInput) els.hallSearchInput.value = "";
  renderSpecimenHall();
  updateProgress();
  updateNavState();
  showToast(`已添加标本：${customCell.title}`);
}

function filteredHallCells() {
  const query = state.hallSearch.trim().toLowerCase();
  return cells.filter((cell) => {
    const matchesFilter = state.hallFilter === "all" || (specimenCategories[cell.id] || []).includes(state.hallFilter);
    const haystack = [cell.title, cell.type, cell.parts.map((part) => part.name).join(" "), cell.note].join(" ").toLowerCase();
    return matchesFilter && (!query || haystack.includes(query));
  });
}

function renderSpecimenHall() {
  if (!els.specimenHall) return;
  els.hallFilterList.innerHTML = specimenFilters.map((filter) => `
    <button class="hall-filter ${filter.id === state.hallFilter ? "is-active" : ""}" type="button" data-hall-filter="${filter.id}">
      <i data-lucide="${filter.icon}"></i>
      ${filter.label}
    </button>
  `).join("");

  const visibleCells = filteredHallCells();
  const cellCards = visibleCells.map((cell) => {
    const index = cells.indexOf(cell);
    const progress = specimenProgress(cell);
    const percent = Math.max(6, Math.round((progress.explored / progress.total) * 100));
    return `
      <article class="hall-card ${index === state.cellIndex ? "is-current" : ""}" style="--accent:${cell.accent}">
        <div class="hall-card-image"><img src="${cell.image}" alt="${cell.title}" loading="eager"></div>
        <div class="hall-card-body">
          <h2>${cell.title}<span>${(specimenCategories[cell.id] || [cell.type])[0] === "plant" ? "植物" : cell.type}</span></h2>
          <p><strong>关键结构：</strong>${cell.parts.slice(0, 3).map((part) => part.name).join("、")}</p>
          <p><strong>学习目标：</strong>${cell.fun.replace("小知识：", "")}</p>
          <div class="hall-card-foot">
            <span>${progress.explored ? `已探索 ${progress.explored}/${progress.total}` : "未开始"}</span>
            <span class="mini-progress"><span style="width:${percent}%"></span></span>
            <span class="hall-card-actions">
              <button type="button" data-hall-material="${index}">查看资料</button>
              <button class="is-secondary" type="button" data-hall-showcase="${index}">查看 3D</button>
            </span>
          </div>
        </div>
      </article>
    `;
  }).join("");
  const addCard = `
    <button class="hall-card add-specimen-card" type="button" data-upload-specimen>
      <span class="add-specimen-visual">
        <span class="add-specimen-icon"><i data-lucide="plus"></i></span>
      </span>
      <span class="add-specimen-body">
        <strong>添加标本</strong>
        <span>上传自己的 .glb 3D 模型</span>
        <small>添加后会自动生成一张标本卡片</small>
      </span>
    </button>
  `;
  els.hallCardGrid.innerHTML = `${cellCards || `<div class="empty-result">没有找到匹配的标本。</div>`}${addCard}`;

  els.hallFilterList.querySelectorAll("[data-hall-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.hallFilter = button.dataset.hallFilter;
      renderSpecimenHall();
      if (window.lucide) window.lucide.createIcons();
    });
  });

  document.querySelectorAll("[data-hall-material]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.hallMaterial);
      if (Number.isFinite(index)) openMaterialCard(index);
    });
  });

  document.querySelectorAll("[data-hall-showcase]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.hallShowcase);
      if (Number.isFinite(index)) enterExplorer(index, { toastMessage: `已打开${cells[index].title} 3D 展示` });
    });
  });

  document.querySelector("[data-upload-specimen]")?.addEventListener("click", () => {
    els.specimenUploadInput?.click();
  });
}

function enterExplorer(index = state.cellIndex, options = {}) {
  state.screen = "explore";
  state.cellIndex = normalizeCellIndex(index);
  state.isStageSwitching = false;
  stageSwitch.phase = "idle";
  stageSwitch.pendingIndex = null;
  resetObservationState();
  closeOnboardingPrompt({ markSeen: true });
  closeMaterialCard();
  updateAll();
  updateScreenState();
  window.scrollTo(0, 0);
  resize();
  showToast(options.toastMessage || `已进入${currentCell().title}`);
}

function showGalleryHome() {
  state.screen = "gallery";
  closePanel();
  closeSettingsModal();
  closeMaterialCard();
  updateScreenState();
  renderSpecimenHall();
  updateProgress();
  updateNavState();
  window.scrollTo(0, 0);
}

function updateScreenState() {
  els.specimenHall?.classList.toggle("is-hidden", state.screen !== "gallery");
  els.exploreWorkspace?.classList.toggle("is-hidden", state.screen !== "explore");
}

function updateProgress() {
  const progress = specimenProgress(currentCell());
  els.progressLabel.textContent = state.screen === "explore" && state.evidenceTab === "task"
    ? `已完成 ${Math.min(2, progress.explored)}/4`
    : `已探索 ${progress.explored}/${progress.total}`;
  const percent = Math.max(4, Math.round((progress.explored / progress.total) * 100));
  els.progressBar.style.width = `${percent}%`;
}

function renderCellList() {
  const specimenCards = cells.map((cell, index) => `
    <button class="cell-card ${index === state.cellIndex ? "is-active" : ""}" type="button" data-cell-index="${index}" style="--accent:${cell.accent}" ${state.isStageSwitching ? "disabled" : ""}>
      <span class="thumb ${cell.thumb} has-image"><img src="${cell.thumbImage}" alt="${cell.title}" loading="eager"></span>
      <span>
        <span class="cell-name">${cell.title}</span>
        <span class="cell-subtitle">${cell.type}</span>
      </span>
      <span class="cell-status">${specimenStatusCopy(cell, index === state.cellIndex)}</span>
      <i data-lucide="chevron-right"></i>
    </button>
  `).join("");
  const addCard = `
    <button class="cell-card stage-add-cell-card" type="button" data-stage-upload-specimen style="--accent:#004737">
      <span class="thumb add-cell-thumb"><i data-lucide="plus"></i></span>
      <span>
        <span class="cell-name">添加模式</span>
        <span class="cell-subtitle">上传自己的 .glb 3D 标本</span>
      </span>
      <span class="cell-status">上传</span>
      <i data-lucide="upload"></i>
    </button>
  `;
  els.cellList.innerHTML = `${specimenCards}${addCard}`;
  els.cellList.querySelectorAll(".cell-card[data-cell-index]").forEach((button) => {
    button.addEventListener("click", () => {
      switchCellTo(Number(button.dataset.cellIndex));
    });
  });
  els.cellList.querySelector("[data-stage-upload-specimen]")?.addEventListener("click", () => {
    els.specimenUploadInput?.click();
  });
  updateCellSwitchControls();
}

function renderOrganelleList() {
  if (!els.organelleList) return;
  const selected = selectedPartData();
  els.organelleList.innerHTML = groupParts().map((group) => `
    <section class="organelle-group">
      <h3><i data-lucide="${group.icon}"></i>${group.name}</h3>
      ${group.parts.map((item) => {
        const globalIndex = currentCell().parts.findIndex((part) => part.name === item.name);
        const explored = structureExplored(item, globalIndex);
        const active = item.name === selected.name;
        const status = active ? (state.evidenceTab === "compare" ? "当前对比" : state.evidenceTab === "task" ? "当前观察" : "当前查看") : explored ? "已探索" : "未探索";
        return `
          <button class="organelle-button ${active ? "is-active" : ""} ${explored ? "is-explored" : ""}" type="button" data-part="${item.name}" style="--part-color:${item.color}">
            <span class="part-dot"></span>
            <span>
              <span class="organelle-name">${item.name}</span>
              <span class="organelle-meta">${item.tag}</span>
            </span>
            <span class="structure-status">${status}</span>
          </button>
        `;
      }).join("")}
    </section>
  `).join("");
  els.organelleList.querySelectorAll(".organelle-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.viewMode = "labels";
      selectPart(button.dataset.part, { focus: false, inspectorTab: "archive" });
    });
  });
}

function renderMicrographs() {
  if (!els.micrographList) {
    if (state.evidenceTab === "micro") renderEvidenceContent();
    return;
  }
  const cell = currentCell();
  const names = [...cell.micro, "添加视野"];
  els.micrographList.innerHTML = names.map((name, index) => `
    <button class="micro-card ${index === state.activeMicroIndex ? "is-active" : ""}" type="button" data-micro-index="${index}">
      <div class="micro-image ${index === 3 ? "micro-add" : ""}" role="img" aria-label="${name}">
        ${index === 3 ? "" : `<img src="${cell.microImages?.[index] || `./assets/thumbs/${cell.id}-micro-${index + 1}.webp`}" alt="${name}" loading="eager">`}
      </div>
      <span>${name}</span>
    </button>
  `).join("");
  els.micrographList.querySelectorAll(".micro-card").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.microIndex);
      if (index === 3) {
        openPanel("notes");
        insertCurrentObservation("待补充显微视野：记录放大倍数、染色方式和观察到的结构。");
        return;
      }
      state.activeMicroIndex = index;
      renderMicrographs();
      openPanel("micro");
    });
  });
}

function renderCompare() {
  if (!els.compareCard) {
    if (state.evidenceTab === "compare") renderEvidenceContent();
    return;
  }
  const cell = currentCell();
  const other = currentCompareCell();
  els.compareCard.innerHTML = `
    <div class="compare-row">
      <div class="compare-cell">
        <span class="thumb ${cell.thumb} has-image" style="--accent:${cell.accent}"><img src="${cell.thumbImage}" alt="${cell.title}" loading="eager"></span>
        <span><strong>${cell.title}</strong><span>当前标本</span></span>
      </div>
      <span class="vs-badge">VS</span>
      <div class="compare-cell">
        <span class="thumb ${other.thumb} has-image" style="--accent:${other.accent}"><img src="${other.thumbImage}" alt="${other.title}" loading="eager"></span>
        <span><strong>${other.title}</strong><span>${other.type}</span></span>
      </div>
    </div>
    <button class="compare-button" type="button">打开对比视图</button>
  `;
  els.compareCard.querySelector(".compare-button").addEventListener("click", () => {
    openPanel("compare");
  });
}

function evidenceMicroContent() {
  const cell = currentCell();
  const selected = Math.min(state.activeMicroIndex, cell.micro.length - 1);
  return `
    <div class="evidence-grid">
      ${cell.micro.map((name, index) => `
        <button class="evidence-card ${index === selected ? "is-active" : ""}" type="button" data-evidence-micro="${index}">
          <img src="${cell.microImages?.[index] || `./assets/thumbs/${cell.id}-micro-${index + 1}.webp`}" alt="${name}" loading="eager">
          <strong>${name}</strong>
          <span>${index === 0 ? "整体结构" : index === 1 ? "染色识别" : "超微细节"}</span>
        </button>
      `).join("")}
      <button class="evidence-card add-note-card" type="button" data-evidence-action="note-micro">
        <i data-lucide="plus"></i>
        <strong>添加到笔记</strong>
        <span>保存证据与想法</span>
      </button>
    </div>
  `;
}

function evidenceCompareContent() {
  const cell = currentCell();
  const other = currentCompareCell();
  return `
    <div class="compare-workbench">
      <article class="compare-model-card">
        <header><i data-lucide="leaf"></i><strong>${cell.title}</strong><span>${cell.type}</span></header>
        <img src="${cell.image}" alt="${cell.title}" loading="eager">
        <p><strong>${selectedPartData().name}</strong>：${selectedPartData().note || cell.note}</p>
        <button type="button" data-evidence-action="open-compare">查看详情 <i data-lucide="arrow-right"></i></button>
      </article>
      <button class="compare-swap" type="button" data-evidence-action="swap-compare" title="切换对比标本">
        <i data-lucide="arrow-left-right"></i>
      </button>
      <article class="compare-model-card">
        <header><i data-lucide="box"></i><strong>${other.title}</strong><span>${other.type}</span></header>
        <img src="${other.image}" alt="${other.title}" loading="eager">
        <p><strong>代表结构</strong>：${other.parts.slice(0, 3).map((part) => part.name).join("、")}</p>
        <button type="button" data-evidence-action="switch-compare-cell">切换到${other.title}</button>
      </article>
      <aside class="compare-conclusion">
        <h3>对比结论</h3>
        <p><strong>共同点：</strong>${cell.title}和${other.title}都通过内部结构分工维持生命活动。</p>
        <p><strong>差异点：</strong>${cell.fun.replace("小知识：", "")}</p>
        <button type="button" data-evidence-action="note-compare"><i data-lucide="download"></i> 记录对比卡</button>
      </aside>
    </div>
  `;
}

function evidenceTaskContent() {
  const cell = currentCell();
  const part = selectedPartData();
  const tasks = [
    { label: `定位${part.name}`, status: "done" },
    { label: `观察${part.name}结构`, status: "done" },
    { label: `记录${part.name}特征`, status: "active" },
    { label: "理解其作用", status: "todo" }
  ];
  return `
    <div class="task-workbench">
      <div class="task-list">
        ${tasks.map((task, index) => `
          <article class="task-step is-${task.status}">
            <span>${task.status === "done" ? '<i data-lucide="check"></i>' : index + 1}</span>
            <strong>${task.label}</strong>
            <small>${task.status === "done" ? "已完成" : task.status === "active" ? "进行中" : "待开始"}</small>
          </article>
        `).join("")}
      </div>
      <aside class="quiz-card">
        <span class="section-kicker"><i data-lucide="badge-help"></i>小测模式</span>
        <h3>${part.name}的主要作用是什么？</h3>
        <button type="button" data-evidence-quiz="wrong">A 储存遗传物质</button>
        <button type="button" data-evidence-quiz="correct">B ${part.tag}</button>
        <button type="button" data-evidence-quiz="wrong">C 合成蛋白质</button>
        <button type="button" data-evidence-quiz="wrong">D 控制物质进出</button>
        <p class="quiz-feedback" data-quiz-feedback><i data-lucide="circle-help"></i>请选择一个答案完成观察任务。</p>
      </aside>
    </div>
  `;
}

const evidenceTitles = {
  micro: "显微观察",
  compare: "横向对比",
  task: "观察任务"
};

function evidenceHtml(kind = state.evidenceTab) {
  const renderers = {
    micro: evidenceMicroContent,
    compare: evidenceCompareContent,
    task: evidenceTaskContent
  };
  return (renderers[kind] || evidenceMicroContent)();
}

function isEvidenceModalOpen() {
  return Boolean(els.evidenceModal && !els.evidenceModal.hidden);
}

function advanceEvidenceStep(kind) {
  state.inspectorTab = "evidence";
  state.evidenceTab = kind;
  updateDetail();
  if (isEvidenceModalOpen()) {
    renderEvidenceModalContent(kind);
  } else {
    renderEvidenceContent();
  }
  updateProgress();
}

function handleEvidenceInteraction(button) {
  if (!button) return;
  if (button.dataset.evidenceMicro != null) {
    state.activeMicroIndex = Number(button.dataset.evidenceMicro);
    showToast(`已选中${currentCell().micro[state.activeMicroIndex]}`);
    if (isEvidenceModalOpen()) {
      renderEvidenceModalContent("micro");
    } else {
      renderEvidenceContent();
    }
    return;
  }
  if (button.dataset.evidenceQuiz != null) {
    const correct = button.dataset.evidenceQuiz === "correct";
    const quiz = button.closest(".quiz-card");
    quiz?.querySelectorAll("[data-evidence-quiz]").forEach((choice) => {
      choice.classList.toggle("is-chosen", choice === button);
      choice.classList.toggle("is-correct", correct && choice === button);
      choice.classList.toggle("is-wrong", !correct && choice === button);
    });
    const feedback = quiz?.querySelector("[data-quiz-feedback]");
    if (feedback) {
      feedback.classList.toggle("is-correct", correct);
      feedback.textContent = correct
        ? `回答正确！${selectedPartData().note || currentCell().note}`
        : "再观察一下右侧结构档案和模型标签，答案与当前结构的功能描述有关。";
    }
    showToast(correct ? "观察任务已完成" : "再想想这个结构的主要作用");
    return;
  }

  const action = button.dataset.evidenceAction;
  if (!action) return;
  if (action === "note-micro") {
    const cell = currentCell();
    insertCurrentObservation(`${cell.title} / ${cell.micro[state.activeMicroIndex]}：记录显微视野下的细胞边界、染色差异和可见结构。`);
    showToast("显微证据已记录，进入横向对比");
    advanceEvidenceStep("compare");
  }
  if (action === "open-compare") advanceEvidenceStep("compare");
  if (action === "note-compare") {
    const cell = currentCell();
    const other = currentCompareCell();
    insertCurrentObservation(`${cell.title} vs ${other.title}：比较${selectedPartData().name}与代表结构的功能差异。`);
    showToast("对比卡已记录，进入观察任务");
    advanceEvidenceStep("task");
  }
  if (action === "swap-compare" || action === "switch-compare-cell") {
    const other = currentCompareCell();
    const index = cells.findIndex((item) => item.id === other.id);
    if (index >= 0) {
      switchCellTo(index, { toast: false });
      state.inspectorTab = "evidence";
      state.evidenceTab = "compare";
      openEvidenceModal("compare");
    }
  }
}

function bindEvidenceInteractions(root) {
  if (!root) return;
  if (root.__evidenceClickHandler) {
    root.removeEventListener("click", root.__evidenceClickHandler);
  }
  root.__evidenceClickHandler = (event) => {
    const button = event.target.closest("[data-evidence-micro], [data-evidence-action], [data-evidence-quiz]");
    if (!button || !root.contains(button)) return;
    event.preventDefault();
    event.stopPropagation();
    handleEvidenceInteraction(button);
  };
  root.addEventListener("click", root.__evidenceClickHandler);
}

function renderEvidenceContent() {
  if (!els.evidenceContent) return;
  els.evidenceTabs?.querySelectorAll("[data-evidence-tab]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.evidenceTab === state.evidenceTab);
  });
  els.evidenceContent.innerHTML = evidenceHtml();
  bindEvidenceInteractions(els.evidenceContent);
  updateEvidenceLaunchState();
  if (window.lucide) window.lucide.createIcons();
}

function renderEvidenceModalContent(kind = state.evidenceTab) {
  if (!els.evidenceModalContent || !isEvidenceModalOpen()) return;
  state.evidenceTab = kind;
  if (els.evidenceModalTitle) els.evidenceModalTitle.textContent = evidenceTitles[kind] || "证据与任务";
  els.evidenceModalContent.dataset.evidenceKind = kind;
  els.evidenceModalContent.innerHTML = evidenceHtml(kind);
  bindEvidenceInteractions(els.evidenceModalContent);
  updateEvidenceLaunchState();
  renderOrganelleList();
  updateProgress();
  if (window.lucide) window.lucide.createIcons();
}

function openEvidenceModal(kind = "micro") {
  if (!els.evidenceModal || !els.evidenceModalBackdrop) return;
  state.inspectorTab = "evidence";
  state.evidenceTab = kind;
  els.evidenceModalBackdrop.hidden = false;
  els.evidenceModal.hidden = false;
  updateDetail();
  renderEvidenceModalContent(kind);
  els.evidenceModalBackdrop.classList.add("is-open");
  els.evidenceModal.classList.add("is-open");
  updateEvidenceLaunchState();
  updateProgress();
}

function closeEvidenceModal() {
  if (!els.evidenceModal || !els.evidenceModalBackdrop) return;
  els.evidenceModal.classList.remove("is-open");
  els.evidenceModalBackdrop.classList.remove("is-open");
  window.setTimeout(() => {
    if (!els.evidenceModal.classList.contains("is-open")) {
      els.evidenceModal.hidden = true;
      els.evidenceModalBackdrop.hidden = true;
    }
  }, 180);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function panelChrome(kind, title, eyebrow, body) {
  return `
    <header class="drawer-head">
      <span class="panel-symbol">${eyebrow}</span>
      <h2>${title}</h2>
    </header>
    <div class="drawer-body" data-panel-kind="${kind}">
      ${body}
    </div>
  `;
}

function openPanel(kind) {
  state.activePanel = kind;
  els.drawer.hidden = false;
  els.drawerBackdrop.hidden = false;
  renderActivePanel();
  els.drawer.classList.add("is-open");
  els.drawerBackdrop.classList.add("is-open");
  updateNavState();
  if (window.lucide) window.lucide.createIcons();
}

function closePanel() {
  els.drawer.classList.remove("is-open");
  els.drawerBackdrop.classList.remove("is-open");
  window.setTimeout(() => {
    if (!els.drawer.classList.contains("is-open")) {
      els.drawer.hidden = true;
      els.drawerBackdrop.hidden = true;
    }
    updateNavState();
  }, 180);
}

function renderSettingsModal() {
  if (!els.settingsContent) return;
  els.settingsContent.innerHTML = `
    <section class="settings-card">
      <h3><i data-lucide="gauge"></i>显示设置</h3>
      <div class="segmented-setting" data-setting-group="theme">
        <span>主题</span>
        <button class="is-active" type="button">浅色</button>
        <button type="button">深色</button>
        <button type="button">跟随系统</button>
      </div>
      <div class="segmented-setting" data-setting-group="background">
        <span>模型背景</span>
        <button class="is-active" type="button">网格</button>
        <button type="button">纯色</button>
        <button type="button">渐变</button>
      </div>
      <label class="setting-switch">
        <span><strong>默认标签</strong><small>进入标本后显示结构名称</small></span>
        <input type="checkbox" data-setting="labels" ${state.viewMode === "labels" ? "checked" : ""}>
      </label>
    </section>
    <section class="settings-card">
      <h3><i data-lucide="book-open"></i>学习设置</h3>
      <div class="segmented-setting">
        <span>难度</span>
        <button class="is-active" type="button">基础</button>
        <button type="button">进阶</button>
        <button type="button">专业</button>
      </div>
      <div class="segmented-setting">
        <span>术语解释</span>
        <button class="is-active" type="button">自动显示</button>
        <button type="button">点击显示</button>
      </div>
      <label class="setting-switch">
        <span><strong>小测提示</strong><small>任务模式中显示答案反馈</small></span>
        <input type="checkbox" checked>
      </label>
    </section>
    <section class="settings-card">
      <h3><i data-lucide="activity"></i>性能设置</h3>
      <div class="segmented-setting">
        <span>3D 质量</span>
        <button type="button">流畅</button>
        <button class="is-active" type="button">标准</button>
        <button type="button">高清</button>
      </div>
      <label class="setting-switch">
        <span><strong>自动旋转</strong><small>模型默认慢速旋转</small></span>
        <input type="checkbox" data-setting="autoRotate" ${state.autoRotate ? "checked" : ""}>
      </label>
      <div class="segmented-setting">
        <span>动画效果</span>
        <button type="button">减少</button>
        <button class="is-active" type="button">标准</button>
      </div>
    </section>
    <div class="settings-footer">
      <button type="button" data-settings-action="reset"><i data-lucide="rotate-ccw"></i>恢复默认</button>
      <button class="primary-action" type="button" data-settings-action="save"><i data-lucide="check"></i>保存设置</button>
    </div>
  `;

  els.settingsContent.querySelectorAll("[data-setting]").forEach((input) => {
    input.addEventListener("change", () => {
      const key = input.dataset.setting;
      if (key === "autoRotate") state.autoRotate = input.checked;
      if (key === "labels") state.viewMode = input.checked ? "labels" : "model";
      updateToolbar();
      updateLabels();
      renderEvidenceContent();
    });
  });

  els.settingsContent.querySelectorAll("[data-settings-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.settingsAction;
      if (action === "reset") {
        resetObservationState({ resetPart: false, resetMicro: false });
        updateToolbar();
        renderSettingsModal();
        showToast("已恢复默认设置");
      }
      if (action === "save") {
        closeSettingsModal();
        showToast("设置已保存");
      }
    });
  });
  if (window.lucide) window.lucide.createIcons();
}

function openSettingsModal() {
  closePanel();
  els.settingsModal.hidden = false;
  els.settingsBackdrop.hidden = false;
  renderSettingsModal();
  window.requestAnimationFrame(() => {
    els.settingsModal.classList.add("is-open");
    els.settingsBackdrop.classList.add("is-open");
    updateNavState();
  });
}

function closeSettingsModal() {
  if (!els.settingsModal || els.settingsModal.hidden) return;
  els.settingsModal.classList.remove("is-open");
  els.settingsBackdrop.classList.remove("is-open");
  window.setTimeout(() => {
    if (!els.settingsModal.classList.contains("is-open")) {
      els.settingsModal.hidden = true;
      els.settingsBackdrop.hidden = true;
    }
    updateNavState();
  }, 180);
}

function setOnboardingSeen() {
  try {
    localStorage.setItem(onboardingStorageKey, "1");
  } catch {
    // The prompt is non-critical; ignore storage failures.
  }
}

function hasSeenOnboarding() {
  try {
    return localStorage.getItem(onboardingStorageKey) === "1";
  } catch {
    return false;
  }
}

function openOnboardingPrompt({ force = false } = {}) {
  if (!els.onboardingPrompt || state.screen !== "gallery") return;
  if (!force && hasSeenOnboarding()) return;
  els.onboardingPrompt.hidden = false;
  els.onboardingBackdrop.hidden = false;
  window.requestAnimationFrame(() => {
    els.onboardingPrompt.classList.add("is-open");
    els.onboardingBackdrop.classList.add("is-open");
  });
  if (!force) setOnboardingSeen();
  if (window.lucide) window.lucide.createIcons();
}

function closeOnboardingPrompt({ markSeen = false } = {}) {
  if (!els.onboardingPrompt || els.onboardingPrompt.hidden) return;
  if (markSeen) setOnboardingSeen();
  els.onboardingPrompt.classList.remove("is-open");
  els.onboardingBackdrop.classList.remove("is-open");
  window.setTimeout(() => {
    if (!els.onboardingPrompt.classList.contains("is-open")) {
      els.onboardingPrompt.hidden = true;
      els.onboardingBackdrop.hidden = true;
    }
  }, 180);
}

function materialSlidesForCell(cell) {
  const slides = (cell.parts || []).filter((part) => part.image);
  if (slides.length) return slides;
  return [
    {
      name: cell.title,
      tag: cell.type,
      color: cell.accent,
      image: cell.occursImage || cell.image,
      facts: { "类型": cell.type, "位置": cell.occurs || "微观结构", "用途": "资料查看" },
      note: cell.note
    }
  ];
}

function normalizeMaterialPartIndex(index, total) {
  if (!total) return 0;
  return ((Math.trunc(Number(index) || 0) % total) + total) % total;
}

function openMaterialCard(index) {
  if (!els.materialCard || !els.materialContent || !els.materialBackdrop) return;
  state.materialCellIndex = normalizeCellIndex(index);
  state.materialPartIndex = 0;
  renderMaterialContent();
  els.materialCard.hidden = false;
  els.materialBackdrop.hidden = false;
  window.requestAnimationFrame(() => {
    els.materialCard.classList.add("is-open");
    els.materialBackdrop.classList.add("is-open");
  });
  if (window.lucide) window.lucide.createIcons();
}

function renderMaterialContent() {
  if (!els.materialContent) return;
  const cellIndex = normalizeCellIndex(state.materialCellIndex);
  const cell = cells[cellIndex];
  const slides = materialSlidesForCell(cell);
  const partIndex = normalizeMaterialPartIndex(state.materialPartIndex, slides.length);
  const activePart = slides[partIndex] || slides[0];
  state.materialCellIndex = cellIndex;
  state.materialPartIndex = partIndex;
  const facts = Object.entries(activePart.facts || {}).slice(0, 4);
  els.materialContent.innerHTML = `
    <button class="material-close" type="button" data-material-close title="关闭资料卡">
      <i data-lucide="x"></i>
    </button>
    <div class="material-visual">
      ${slides.length > 1 ? `
        <button class="material-carousel-button is-prev" type="button" data-material-shift="-1" title="上一张结构插画">
          <i data-lucide="chevron-left"></i>
        </button>
      ` : ""}
      <img src="${activePart.image}" alt="${cell.title}${activePart.name}资料配图" loading="eager">
      ${slides.length > 1 ? `
        <button class="material-carousel-button is-next" type="button" data-material-shift="1" title="下一张结构插画">
          <i data-lucide="chevron-right"></i>
        </button>
      ` : ""}
      <span class="material-counter">${partIndex + 1}/${slides.length}</span>
    </div>
    <div class="material-body">
      <span class="section-kicker"><i data-lucide="book-open"></i>标本资料</span>
      <h2 id="material-title">${escapeHtml(cell.title)}</h2>
      <p class="material-type">${escapeHtml(cell.type)} · ${escapeHtml(cell.occurs || "微观生命结构")}</p>
      <p>${escapeHtml(cell.note)}</p>
      <div class="material-highlight" style="--accent:${activePart.color || cell.accent}">
        <strong>${escapeHtml(activePart.name || "核心结构")}</strong>
        <span>${escapeHtml(activePart.tag || "观察重点")}</span>
        <p>${escapeHtml(activePart.note || cell.fun.replace("小知识：", ""))}</p>
      </div>
      ${facts.length ? `
        <dl class="material-facts">
          ${facts.map(([term, value]) => `<dt>${escapeHtml(term)}</dt><dd>${escapeHtml(value)}</dd>`).join("")}
        </dl>
      ` : ""}
      <div class="material-chips">
        ${slides.map((part, index) => `
          <button class="${index === partIndex ? "is-active" : ""}" type="button" style="--part-color:${part.color || cell.accent}" data-material-part="${index}">
            ${escapeHtml(part.name)}
          </button>
        `).join("")}
      </div>
      <button class="primary-action material-ok" type="button" data-material-close>知道了</button>
    </div>
  `;
  bindMaterialContentEvents();
  if (window.lucide) window.lucide.createIcons();
}

function bindMaterialContentEvents() {
  els.materialContent.querySelectorAll("[data-material-close]").forEach((button) => {
    button.addEventListener("click", closeMaterialCard);
  });
  els.materialContent.querySelectorAll("[data-material-shift]").forEach((button) => {
    button.addEventListener("click", () => {
      state.materialPartIndex += Number(button.dataset.materialShift) || 0;
      renderMaterialContent();
    });
  });
  els.materialContent.querySelectorAll("[data-material-part]").forEach((button) => {
    button.addEventListener("click", () => {
      state.materialPartIndex = Number(button.dataset.materialPart) || 0;
      renderMaterialContent();
    });
  });
}

function closeMaterialCard() {
  if (!els.materialCard || els.materialCard.hidden || !els.materialBackdrop) return;
  els.materialCard.classList.remove("is-open");
  els.materialBackdrop.classList.remove("is-open");
  window.setTimeout(() => {
    if (!els.materialCard.classList.contains("is-open")) {
      els.materialCard.hidden = true;
      els.materialBackdrop.hidden = true;
    }
  }, 180);
}

function handleMaterialOutsideClick(event) {
  if (!els.materialCard || els.materialCard.hidden) return;
  if (els.materialCard.contains(event.target)) return;
  closeMaterialCard();
}

function updateNavState() {
  const drawerOpen = !els.drawer.hidden && els.drawer.classList.contains("is-open");
  const settingsOpen = els.settingsModal && !els.settingsModal.hidden && els.settingsModal.classList.contains("is-open");
  els.topNavButtons.forEach((button) => {
    const nav = button.dataset.nav;
    const active = settingsOpen
      ? nav === "settings"
      : drawerOpen
        ? nav === state.activePanel
        : nav === (state.screen === "gallery" ? "gallery" : "showcase");
    button.classList.toggle("is-active", active);
  });
}

function renderActivePanel() {
  if (!els.drawerContent || els.drawer.hidden) return;
  const renderers = {
    gallery: renderGalleryPanel,
    library: renderLibraryPanel,
    notes: renderNotesPanel,
    settings: renderSettingsPanel,
    micro: renderMicroPanel,
    compare: renderComparePanel
  };
  const rendererFn = renderers[state.activePanel] || renderGalleryPanel;
  els.drawerContent.innerHTML = rendererFn();
  bindPanelEvents();
  if (window.lucide) window.lucide.createIcons();
}

function renderGalleryPanel() {
  return panelChrome("gallery", "标本馆", "CELL", `
    <p class="drawer-lead">从不同细胞类型切换标本，右侧说明和主舞台会同步更新。</p>
    <div class="drawer-cell-grid">
      ${cells.map((cell, index) => `
        <button class="drawer-cell-card ${index === state.cellIndex ? "is-active" : ""}" type="button" data-gallery-cell="${index}" style="--accent:${cell.accent}">
          <span class="thumb ${cell.thumb} has-image"><img src="${cell.thumbImage}" alt="${cell.title}" loading="eager"></span>
          <span><strong>${cell.title}</strong><small>${cell.type}</small></span>
        </button>
      `).join("")}
    </div>
  `);
}

function renderLibraryPanel() {
  const cell = currentCell();
  const part = selectedPartData();
  return panelChrome("library", "知识库", "NOTE", `
    <p class="drawer-lead">${cell.note}</p>
    <section class="knowledge-focus">
      <span class="detail-icon has-image" style="--accent:${part.color}">${part.image ? `<img src="${part.image}" alt="${part.name}" loading="eager">` : ""}</span>
      <div>
        <h3>${part.name}</h3>
        <p>${part.note || cell.note}</p>
      </div>
    </section>
    <dl class="drawer-facts">
      ${Object.entries(part.facts).map(([term, value]) => `<dt>${term}</dt><dd>${value}</dd>`).join("")}
    </dl>
    <div class="drawer-actions">
      <button type="button" data-action="show-labels">在模型中标注</button>
      <button type="button" data-action="note-current">记入笔记</button>
    </div>
  `);
}

function renderNotesPanel() {
  const note = getStoredNote();
  return panelChrome("notes", "观察笔记", "LOG", `
    <p class="drawer-lead">记录当前标本、结构和显微视野。内容会保存在本机浏览器。</p>
    <textarea id="notes-input" class="notes-input" rows="12" placeholder="记录你的观察...">${escapeHtml(note)}</textarea>
    <div class="notes-meta">
      <span>${note.length} 字</span>
      <span>${currentCell().title} / ${selectedPartData().name}</span>
    </div>
    <div class="drawer-actions">
      <button type="button" data-action="insert-observation">插入当前观察</button>
      <button type="button" data-action="clear-notes">清空</button>
    </div>
  `);
}

function renderSettingsPanel() {
  return panelChrome("settings", "设置", "SET", `
    <p class="drawer-lead">调整当前演示状态，这些开关会直接作用到主舞台。</p>
    <label class="setting-row">
      <span><strong>自动旋转</strong><small>让模型持续慢速旋转</small></span>
      <input type="checkbox" data-setting="autoRotate" ${state.autoRotate ? "checked" : ""}>
    </label>
    <label class="setting-row">
      <span><strong>标签讲解</strong><small>固定显示结构名称标注</small></span>
      <input type="checkbox" data-setting="labels" ${state.viewMode === "labels" ? "checked" : ""}>
    </label>
    <label class="setting-row">
      <span><strong>灰模显示</strong><small>用灰模材质查看整体体块关系</small></span>
      <input type="checkbox" data-setting="dimOthers" ${state.dimOthers ? "checked" : ""}>
    </label>
    <div class="drawer-actions">
      <button type="button" data-action="reset-view">恢复默认视角</button>
    </div>
  `);
}

function renderMicroPanel() {
  const cell = currentCell();
  const index = Math.min(state.activeMicroIndex, 2);
  const name = cell.micro[index];
  const image = cell.microImages?.[index] || `./assets/thumbs/${cell.id}-micro-${index + 1}.webp`;
  const descriptions = [
    "用于快速观察组织排列和细胞边界，适合判断整体结构。",
    "通过染色增强细胞核、细胞壁或胞质差异，适合训练识别能力。",
    "强调超微结构细节，适合关联 3D 结构与真实显微证据。"
  ];
  return panelChrome("micro", "显微观察", "MIC", `
    <figure class="micro-inspector">
      <img src="${image}" alt="${name}" loading="eager">
      <figcaption>
        <strong>${name}</strong>
        <span>${descriptions[index]}</span>
      </figcaption>
    </figure>
    <div class="drawer-actions">
      ${cell.micro.map((item, itemIndex) => `<button type="button" class="${itemIndex === index ? "is-active" : ""}" data-micro-pick="${itemIndex}">${item}</button>`).join("")}
      <button type="button" data-action="note-micro">记入笔记</button>
    </div>
  `);
}

function renderComparePanel() {
  const cell = currentCell();
  const other = currentCompareCell();
  return panelChrome("compare", "横向对比", "VS", `
    <div class="compare-drawer-row">
      <div><span class="thumb ${cell.thumb} has-image"><img src="${cell.thumbImage}" alt="${cell.title}" loading="eager"></span><strong>${cell.title}</strong><small>${cell.type}</small></div>
      <div><span class="thumb ${other.thumb} has-image"><img src="${other.thumbImage}" alt="${other.title}" loading="eager"></span><strong>${other.title}</strong><small>${other.type}</small></div>
    </div>
    <table class="compare-table">
      <tr><th>维度</th><th>${cell.title}</th><th>${other.title}</th></tr>
      <tr><td>代表结构</td><td>${cell.parts.slice(0, 3).map((part) => part.name).join("、")}</td><td>${other.parts.slice(0, 3).map((part) => part.name).join("、")}</td></tr>
      <tr><td>出现位置</td><td>${cell.occurs}</td><td>${other.occurs}</td></tr>
      <tr><td>观察重点</td><td>${cell.fun.replace("小知识：", "")}</td><td>${other.fun.replace("小知识：", "")}</td></tr>
    </table>
    <div class="drawer-actions">
      <button type="button" data-action="switch-compare">切换到${other.title}</button>
      <button type="button" data-action="note-compare">记入笔记</button>
    </div>
  `);
}

function insertCurrentObservation(extra = "") {
  const cell = currentCell();
  const part = selectedPartData();
  const line = extra || `${cell.title} / ${part.name}：${part.note || cell.note}`;
  const current = getStoredNote();
  const next = `${current}${current ? "\n" : ""}${line}`;
  setStoredNote(next);
  const input = document.querySelector("#notes-input");
  if (input) {
    input.value = next;
    const meta = document.querySelector(".notes-meta span");
    if (meta) meta.textContent = `${next.length} 字`;
  }
  showToast("已写入观察笔记");
}

function bindPanelEvents() {
  els.drawerContent.querySelectorAll("[data-gallery-cell]").forEach((button) => {
    button.addEventListener("click", () => {
      switchCellTo(Number(button.dataset.galleryCell), { toast: false });
      openPanel("gallery");
      showToast(`已切换到${currentCell().title}`);
    });
  });

  els.drawerContent.querySelectorAll("[data-micro-pick]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeMicroIndex = Number(button.dataset.microPick);
      renderMicrographs();
      renderActivePanel();
    });
  });

  const notesInput = els.drawerContent.querySelector("#notes-input");
  if (notesInput) {
    notesInput.addEventListener("input", () => {
      setStoredNote(notesInput.value);
      const meta = els.drawerContent.querySelector(".notes-meta span");
      if (meta) meta.textContent = `${notesInput.value.length} 字`;
    });
  }

  els.drawerContent.querySelectorAll("[data-setting]").forEach((input) => {
    input.addEventListener("change", () => {
      const key = input.dataset.setting;
      if (key === "autoRotate") state.autoRotate = input.checked;
      if (key === "labels") state.viewMode = input.checked ? "labels" : "model";
      if (key === "dimOthers") state.dimOthers = input.checked;
      updateToolbar();
      updateLabels();
      renderActivePanel();
    });
  });

  els.drawerContent.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      if (action === "show-labels") {
        state.viewMode = "labels";
        updateToolbar();
        updateLabels();
      }
      if (action === "insert-observation" || action === "note-current") insertCurrentObservation();
      if (action === "clear-notes") {
        setStoredNote("");
        renderActivePanel();
        showToast("笔记已清空");
      }
      if (action === "note-micro") {
        const cell = currentCell();
        insertCurrentObservation(`${cell.title} / ${cell.micro[state.activeMicroIndex]}：记录显微视野下的细胞边界、染色差异和可见结构。`);
      }
      if (action === "note-compare") {
        const cell = currentCell();
        const other = currentCompareCell();
        insertCurrentObservation(`${cell.title} 与 ${other.title} 对比：记录结构差异、能量来源和显微观察重点。`);
      }
      if (action === "switch-compare") {
        const other = currentCompareCell();
        const index = cells.findIndex((item) => item.id === other.id);
        if (index >= 0) {
          state.cellIndex = index;
          resetObservationState();
          updateAll();
          openPanel("compare");
        }
      }
      if (action === "reset-view") {
        resetObservationState({ resetPart: false, resetMicro: false });
        updateToolbar();
        renderActivePanel();
      }
    });
  });
}

function renderInspectorTabContent(cell, part) {
  const entries = Object.entries(part.facts);
  return `
    <section class="inspector-section inspector-archive">
      <h4><i data-lucide="file-text"></i>结构档案</h4>
      <p>${part.note || cell.note}</p>
    </section>
    <dl class="fact-list inspector-facts">
      ${entries.map(([term, value]) => `<dt>${term}</dt><dd>${value}</dd>`).join("")}
    </dl>
    <section class="knowledge-card">
      <span class="section-kicker"><i data-lucide="lightbulb"></i>小知识</span>
      <p>${cell.fun.replace("小知识：", "")}</p>
    </section>
    <section class="related-parts">
      <h4>相关结构</h4>
      <div>
        ${cell.parts.filter((item) => item.name !== part.name).slice(0, 4).map((item) => `
          <button type="button" data-related-part="${item.name}">${item.name}</button>
        `).join("")}
      </div>
    </section>
  `;
}

function bindInspectorEvents() {
  els.inspectorContent?.querySelectorAll("[data-related-part]").forEach((button) => {
    button.addEventListener("click", () => {
      state.viewMode = "labels";
      selectPart(button.dataset.relatedPart, { focus: false, inspectorTab: "archive" });
    });
  });
}

function renderQuickPartList() {
  if (!els.quickPartList) return;
  els.quickPartList.innerHTML = currentCell().parts.slice(0, 4).map((part) => `
    <button type="button" data-quick-part="${part.name}" style="--part-color:${part.color}">
      <span class="part-dot"></span>${part.name}
    </button>
  `).join("");
  els.quickPartList.querySelectorAll("[data-quick-part]").forEach((button) => {
    button.addEventListener("click", () => {
      state.viewMode = "labels";
      selectPart(button.dataset.quickPart, { focus: false, inspectorTab: "archive" });
    });
  });
}

function updateDetail() {
  const cell = currentCell();
  const part = selectedPartData();
  const hasPart = Boolean(part);
  els.inspectorEmpty?.classList.toggle("is-hidden", hasPart);
  els.inspectorDetail?.classList.toggle("is-hidden", !hasPart);
  renderQuickPartList();
  if (!hasPart) return;
  els.detailName.textContent = part.name;
  els.detailSubtitle.textContent = part.tag;
  if (els.bioNote) els.bioNote.textContent = part.note || cell.note;
  if (els.funFact) els.funFact.textContent = cell.fun;
  els.detailIcon.style.setProperty("--accent", part.color);
  els.detailIcon.classList.toggle("has-image", Boolean(part.image));
  els.detailIcon.innerHTML = part.image ? `<img src="${part.image}" alt="${part.name}" loading="eager">` : "";
  if (els.detailFacts) els.detailFacts.innerHTML = Object.entries(part.facts).map(([term, value]) => `<dt>${term}</dt><dd>${value}</dd>`).join("");
  if (els.inspectorContent) {
    els.inspectorContent.innerHTML = renderInspectorTabContent(cell, part);
    bindInspectorEvents();
  }
  syncInspectorPanels();
  els.favoriteButton.classList.toggle("is-active", state.favorite);
  if (window.lucide) window.lucide.createIcons();
}

function updateLabels() {
  const cell = currentCell();
  els.labelLayer.innerHTML = cell.parts.slice(0, 5).map((part, index) => `
    <button class="model-label ${part.name === state.selectedPart ? "is-selected" : ""}" type="button" data-label-index="${index}" style="--label-color:${part.color}">
      ${part.name}
    </button>
  `).join("");
  els.labelLayer.querySelectorAll(".model-label").forEach((label) => {
    label.addEventListener("click", () => {
      const part = cell.parts[Number(label.dataset.labelIndex)];
      if (!part) return;
      selectPart(part.name, { focus: false, inspectorTab: "archive" });
    });
  });
  els.labelLayer.classList.toggle("is-visible", state.viewMode === "labels");
  positionLabels();
}

function positionLabels() {
  if (!els.labelLayer) return;
  const labels = [...els.labelLayer.querySelectorAll(".model-label")];
  if (!labels.length) return;
  const shouldShow = state.viewMode === "labels";
  els.labelLayer.classList.toggle("is-visible", shouldShow);
  projectedLabelPoints = [];

  const rect = wrap.getBoundingClientRect();
  const anchors = modelGroup?.userData?.labelAnchors?.children || [];
  modelGroup?.updateMatrixWorld(true);
  let centerX = rect.width * 0.5;
  let centerY = rect.height * 0.5;
  if (modelGroup) {
    labelCenterProjection.setFromMatrixPosition(modelGroup.matrixWorld).project(camera);
    centerX = (labelCenterProjection.x * 0.5 + 0.5) * rect.width;
    centerY = (-labelCenterProjection.y * 0.5 + 0.5) * rect.height;
  }
  const cellId = currentCell().id;
  const lockedRadii = centerLockedLabelRadii[cellId];
  const lockedAngles = centerLockedLabelAngles[cellId];
  labels.forEach((label, index) => {
    const part = currentCell().parts[index];
    const anchor = anchors[index];
    let x = rect.width * (0.5 + (index - labels.length / 2) * 0.06);
    let y = rect.height * (0.56 + index * 0.035);
    let inFrame = false;
    if (anchor) {
      labelProjection.setFromMatrixPosition(anchor.matrixWorld).project(camera);
      x = (labelProjection.x * 0.5 + 0.5) * rect.width;
      y = (-labelProjection.y * 0.5 + 0.5) * rect.height;
      if (lockedRadii?.[index]) {
        let dx = x - centerX;
        let dy = y - centerY;
        const currentDistance = Math.hypot(dx, dy);
        if (currentDistance < 4) {
          const fallbackAngle = (lockedAngles?.[index] ?? index * 0.9) + (modelGroup?.rotation.y || 0) * 0.35;
          dx = Math.cos(fallbackAngle);
          dy = Math.sin(fallbackAngle);
        } else {
          dx /= currentDistance;
          dy /= currentDistance;
        }
        const fixedDistance = Math.min(rect.width, rect.height) * lockedRadii[index];
        x = centerX + dx * fixedDistance;
        y = centerY + dy * fixedDistance;
      }
      inFrame = labelProjection.z > -1 && labelProjection.z < 1 && x > -90 && x < rect.width + 90 && y > -60 && y < rect.height + 80;
    }
    const visible = shouldShow && Boolean(part) && (!anchor || inFrame);
    label.style.opacity = visible ? "1" : "0";
    label.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    label.classList.toggle("is-selected", part?.name === state.selectedPart);
    projectedLabelPoints[index] = { x, y, visible, part, anchor };
  });
}

function updateSpecimenImage() {
  const cell = currentCell();
  els.specimenImage.classList.add("is-switching");
  window.setTimeout(() => {
    els.specimenImage.src = cell.image;
    els.specimenImage.alt = `${cell.title} 3D 标本`;
    els.specimenImage.style.setProperty("--specimen-scale", cell.id === "neuron" || cell.id === "muscle" ? "1.18" : "1.14");
    els.specimenImage.style.setProperty("--pan-y", cell.id === "plant" || cell.id === "animal" ? "1%" : "0");
    els.specimenImage.classList.toggle("is-focused", state.isolate || state.dimOthers);
    els.specimenImage.addEventListener("load", () => els.specimenImage.classList.remove("is-switching"), { once: true });
    if (els.specimenImage.complete) els.specimenImage.classList.remove("is-switching");
  }, 120);
}

function updateHeader() {
  const cell = currentCell();
  const part = selectedPartData();
  els.cellTitle.textContent = cell.title;
  els.cellType.textContent = `${cell.type} · 当前标本`;
  if (els.stageGuidance) {
    els.stageGuidance.textContent = state.viewMode === "labels"
      ? `正在观察${part.name}，可继续旋转模型确认它在细胞中的位置。`
      : "点击左侧结构目录或 3D 模型中的细胞器开始观察。";
  }
  if (els.stageCurrentChip) {
    els.stageCurrentChip.innerHTML = `<span style="background:${part.color}"></span> 当前选中：${part.name}`;
  }
  if (els.occursVisual) {
    els.occursVisual.dataset.label = cell.occurs;
    els.occursVisual.classList.toggle("has-image", Boolean(cell.occursImage));
    els.occursVisual.innerHTML = cell.occursImage ? `<img src="${cell.occursImage}" alt="${cell.occurs}" loading="eager">` : "";
  }
}

function updateAll() {
  const cell = currentCell();
  setTheme(cell);
  updateScreenState();
  updateHeader();
  renderCellList();
  renderOrganelleList();
  renderMicrographs();
  renderCompare();
  updateDetail();
  renderEvidenceContent();
  renderEvidenceModalContent();
  renderSpecimenHall();
  updateProgress();
  updateLabels();
  updateSpecimenImage();
  rebuildModel();
  updateToolbar();
  updateCellSwitchControls();
  renderActivePanel();
  updateNavState();
  if (window.lucide) window.lucide.createIcons();
}

function updateToolbar() {
  updateStageModeState();
  updateCellSwitchControls();
  els.rotateButton.classList.toggle("is-active", state.autoRotate);
  els.isolateButton.classList.toggle("is-active", state.isolate);
  els.hideButton.classList.toggle("is-active", state.dimOthers);
  els.labelsButton?.classList.toggle("is-active", state.viewMode === "labels");
  els.specimenImage.classList.toggle("is-focused", state.isolate || state.dimOthers);
  const rotateCopy = state.autoRotate ? "暂停自动旋转" : "恢复自动旋转";
  els.rotateButton.title = rotateCopy;
  els.rotateButton.setAttribute("aria-pressed", state.autoRotate ? "true" : "false");
  els.isolateButton.setAttribute("aria-pressed", state.isolate ? "true" : "false");
  els.hideButton.setAttribute("aria-pressed", state.dimOthers ? "true" : "false");
  els.labelsButton?.setAttribute("aria-pressed", state.viewMode === "labels" ? "true" : "false");
  document.querySelectorAll(".mode-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.viewMode === state.viewMode);
  });
}

function resetCamera() {
  cameraTween.active = false;
  camera.position.copy(defaultCameraPosition);
  controls.target.copy(defaultCameraTarget);
  controls.update();
  if (modelGroup) modelGroup.rotation.y = 0;
}

function startCameraTween(toPosition, toTarget) {
  cameraTween.active = true;
  cameraTween.startedAt = performance.now();
  cameraTween.fromPosition.copy(camera.position);
  cameraTween.fromTarget.copy(controls.target);
  cameraTween.toPosition.copy(toPosition);
  cameraTween.toTarget.copy(toTarget);
}

function updateCameraTween(now) {
  if (!cameraTween.active) return;
  const t = Math.min(1, (now - cameraTween.startedAt) / cameraTween.duration);
  const eased = 1 - Math.pow(1 - t, 3);
  camera.position.lerpVectors(cameraTween.fromPosition, cameraTween.toPosition, eased);
  controls.target.lerpVectors(cameraTween.fromTarget, cameraTween.toTarget, eased);
  if (t >= 1) cameraTween.active = false;
}

function selectedStageLabelPoint() {
  const rect = wrap.getBoundingClientRect();
  const point = projectedLabelPoints[selectedPartIndex()];
  if (point?.visible) {
    return {
      px: (point.x / Math.max(1, rect.width)) * 100,
      py: (point.y / Math.max(1, rect.height)) * 100
    };
  }
  return { px: 50, py: 50 };
}

function restoreCameraView() {
  startCameraTween(defaultCameraPosition, defaultCameraTarget);
  if (modelGroup) modelGroup.rotation.y = 0;
}

function focusSelectedPart() {
  if (!modelGroup) return;
  const { px, py } = selectedStageLabelPoint();
  const offsetX = ((px - 50) / 50) * 0.9;
  const offsetY = ((50 - py) / 50) * 0.46;
  const target = defaultCameraTarget.clone().add(new THREE.Vector3(offsetX, offsetY, 0));
  const direction = defaultCameraPosition.clone().sub(defaultCameraTarget).normalize();
  const zoomDistance = defaultCameraPosition.distanceTo(defaultCameraTarget) * 0.5;
  const position = target.clone().add(direction.multiplyScalar(zoomDistance));
  startCameraTween(position, target);
}

function pickPartFromStage(event) {
  if (!projectedLabelPoints.length) return;
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  let best = null;
  projectedLabelPoints.forEach((point) => {
    if (!point?.visible || !point.part) return;
    const distance = Math.hypot(point.x - x, point.y - y);
    if (distance <= 92 && (!best || distance < best.distance)) {
      best = { ...point, distance };
    }
  });
  if (!best) return;
  state.viewMode = "labels";
  selectPart(best.part.name, { focus: false, inspectorTab: "archive" });
}

function exportCurrentModel() {
  const cell = currentCell();
  const url = cell.modelUrl || cell.image;
  if (!url) {
    showToast("当前标本暂无可导出的模型文件");
    return;
  }
  const link = document.createElement("a");
  link.href = url;
  link.download = cell.modelUrl ? `${cell.id}-model.glb` : `${cell.id}-specimen.png`;
  link.click();
  showToast(cell.modelUrl ? "模型文件已开始下载" : "标本图片已开始下载");
}

function updateSplitCamera() {
  const splitProgress = modelGroup?.userData.splitRoot?.userData.progress || 0;
  if (!state.crossSection && splitProgress <= 0.001) return;
  const desiredPosition = defaultCameraPosition.clone().lerp(splitCameraPosition, splitProgress);
  const desiredTarget = defaultCameraTarget.clone().lerp(splitCameraTarget, splitProgress);
  camera.position.lerp(desiredPosition, 0.1);
  controls.target.lerp(desiredTarget, 0.1);
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("is-visible");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => els.toast.classList.remove("is-visible"), 2400);
}

function bindEvents() {
  els.topNavButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nav = button.dataset.nav;
      if (nav === "gallery") {
        showGalleryHome();
        return;
      }
      if (nav === "showcase") {
        enterExplorer(state.cellIndex, { toastMessage: "已进入 3D 展示模块" });
        return;
      }
      if (nav === "settings") {
        openSettingsModal();
        return;
      }
      if (state.screen !== "explore") enterExplorer(state.cellIndex);
      if (nav === "library" || nav === "notes") openPanel(nav);
    });
  });

  els.drawerClose?.addEventListener("click", closePanel);
  els.drawerBackdrop?.addEventListener("click", closePanel);
  els.settingsClose?.addEventListener("click", closeSettingsModal);
  els.settingsBackdrop?.addEventListener("click", closeSettingsModal);
  els.materialBackdrop?.addEventListener("click", closeMaterialCard);
  document.addEventListener("mousedown", handleMaterialOutsideClick);
  els.hallSearchInput?.addEventListener("input", () => {
    state.hallSearch = els.hallSearchInput.value;
    renderSpecimenHall();
    if (window.lucide) window.lucide.createIcons();
  });
  els.guideButton?.addEventListener("click", () => openOnboardingPrompt({ force: true }));
  els.showcaseEntryButton?.addEventListener("click", () => {
    enterExplorer(state.cellIndex, { toastMessage: "已进入 3D 展示模块" });
  });
  els.onboardingClose?.addEventListener("click", () => closeOnboardingPrompt({ markSeen: true }));
  els.onboardingBackdrop?.addEventListener("click", () => closeOnboardingPrompt({ markSeen: true }));
  els.onboardingStay?.addEventListener("click", () => closeOnboardingPrompt({ markSeen: true }));
  els.onboardingStart?.addEventListener("click", () => {
    enterExplorer(state.cellIndex, { toastMessage: "已进入 3D 展示模块" });
  });
  els.specimenUploadInput?.addEventListener("change", () => {
    const file = els.specimenUploadInput.files?.[0];
    handleSpecimenUpload(file);
    els.specimenUploadInput.value = "";
  });
  els.evidenceLaunchButtons.forEach((button) => {
    button.addEventListener("click", () => {
      openEvidenceModal(button.dataset.evidenceOpen || "micro");
    });
  });
  els.inspectorTabs?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-inspector-tab]");
    if (button && els.inspectorTabs.contains(button)) {
      state.inspectorTab = normalizeInspectorTab(button.dataset.inspectorTab);
      updateDetail();
      if (state.inspectorTab === "evidence") renderEvidenceContent();
      showToast(button.textContent.trim());
    }
  });
  els.evidenceModalClose?.addEventListener("click", closeEvidenceModal);
  els.evidenceModalBackdrop?.addEventListener("click", closeEvidenceModal);
  els.evidenceTabs?.querySelectorAll("[data-evidence-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.evidenceTab = button.dataset.evidenceTab;
      renderEvidenceContent();
      renderOrganelleList();
      updateProgress();
      if (window.lucide) window.lucide.createIcons();
    });
  });
  els.evidenceCollapse?.addEventListener("click", () => {
    els.evidenceContent?.classList.toggle("is-collapsed");
    els.evidenceCollapse.classList.toggle("is-collapsed");
  });

  window.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (els.evidenceModal && !els.evidenceModal.hidden) {
      closeEvidenceModal();
      return;
    }
    if (els.materialCard && !els.materialCard.hidden) {
      closeMaterialCard();
      return;
    }
    if (els.onboardingPrompt && !els.onboardingPrompt.hidden) {
      closeOnboardingPrompt({ markSeen: true });
      return;
    }
    if (els.settingsModal && !els.settingsModal.hidden) {
      closeSettingsModal();
      return;
    }
    if (!els.drawer.hidden) closePanel();
  });

  document.querySelectorAll(".mode-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.viewMode = button.dataset.viewMode;
      updateToolbar();
      updateLabels();
      showToast(button.title);
    });
  });

  els.layerModePanel?.querySelectorAll(".layer-mode-chip").forEach((button) => {
    button.addEventListener("click", () => {
      state.layerRenderMode = button.dataset.layerRender;
      updateToolbar();
      showToast(`图层材质：${button.textContent.trim()}`);
    });
  });

  els.labelsButton?.addEventListener("click", () => {
    state.viewMode = state.viewMode === "labels" ? "model" : "labels";
    updateHeader();
    updateToolbar();
    updateLabels();
    showToast(state.viewMode === "labels" ? "结构标签已显示" : "结构标签已隐藏");
  });

  els.rotateButton.addEventListener("click", () => {
    state.autoRotate = !state.autoRotate;
    updateToolbar();
    showToast(state.autoRotate ? "自动旋转已恢复" : "自动旋转已暂停");
  });

  els.stagePrevButton.addEventListener("click", () => {
    switchCellTo(state.cellIndex - 1, { direction: -1 });
  });

  els.stageNextButton.addEventListener("click", () => {
    switchCellTo(state.cellIndex + 1, { direction: 1 });
  });

  els.isolateButton.addEventListener("click", () => {
    state.isolate = !state.isolate;
    if (state.isolate) {
      focusSelectedPart();
      showToast(`已聚焦${selectedPartData().name}`);
    } else {
      restoreCameraView();
      showToast("已退出聚焦");
    }
    updateToolbar();
  });

  els.hideButton.addEventListener("click", () => {
    state.dimOthers = !state.dimOthers;
    state.layerRenderMode = "gray";
    if (state.dimOthers) {
      showToast("灰模显示已开启");
    } else {
      showToast("灰模显示已关闭");
    }
    updateToolbar();
    updateModelMaterials();
  });

  els.resetButton.addEventListener("click", () => {
    state.isolate = false;
    restoreCameraView();
    updateToolbar();
    showToast("视角已复位");
  });

  els.screenshotButton.addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = `${currentCell().title}-观察截图.png`;
    updateCameraTween(performance.now());
    controls.update();
    positionLabels();
    renderer.render(scene, camera);
    link.href = renderer.domElement.toDataURL("image/png");
    link.click();
    showToast("截图已生成");
  });

  els.exportButton.addEventListener("click", () => {
    exportCurrentModel();
  });

  els.favoriteButton.addEventListener("click", () => {
    state.favorite = !state.favorite;
    updateDetail();
    showToast(state.favorite ? "已收藏当前结构" : "已取消收藏");
  });

  window.addEventListener("resize", resize);
  canvas.addEventListener("click", pickPartFromStage);
}

function resize() {
  const rect = wrap.getBoundingClientRect();
  const width = Math.max(320, Math.floor(rect.width));
  const height = Math.max(320, Math.floor(rect.height));
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  positionLabels();
}

function updateSplitPlanes() {
  if (!modelGroup?.userData.loadedGltf) return;
  const splitRoot = modelGroup.userData.splitRoot;
  if (!splitRoot) return;
  (splitRoot.userData.layers || []).forEach((layer) => {
    layer.updateMatrixWorld(true);
    splitNormalMatrix.getNormalMatrix(layer.matrixWorld);
    layer.userData.localPlanes?.forEach((plane, index) => {
      layer.userData.worldPlanes?.[index]?.copy(plane).applyMatrix4(layer.matrixWorld, splitNormalMatrix);
    });
  });
}

function updateSplitAnimation() {
  if (!modelGroup?.userData.loadedGltf) return;
  const splitRoot = modelGroup.userData.splitRoot;
  if (!splitRoot) return;
  const target = state.crossSection ? 1 : 0;
  const current = splitRoot.userData.progress || 0;
  let next = current + (target - current) * 0.09;
  if (Math.abs(next - target) < 0.012) next = target;
  splitRoot.userData.progress = next;

  const splitActive = next > 0.015;
  if (modelGroup.userData.splitActive !== splitActive) {
    modelGroup.userData.splitActive = splitActive;
    updateModelMaterials();
  }

  splitRoot.visible = splitActive;
  if (modelGroup.userData.content) modelGroup.userData.content.visible = !splitActive;
  (splitRoot.userData.layers || []).forEach((layer) => {
    const base = layer.userData.basePosition;
    if (base) layer.position.copy(base);
    layer.position.y += next * layer.userData.layerOffset;
    layer.position.z += next * Math.abs(layer.userData.layerOffset) * 0.1;
  });
  updateSplitPlanes();
}

function animate(now) {
  requestAnimationFrame(animate);
  const elapsed = now - rebuildStart;
  const enter = Math.min(1, elapsed / 650);
  if (modelGroup) {
    const targetScale = getTargetStageScale();
    const eased = 1 - Math.pow(1 - enter, 3);
    const introScale = stageSwitch.phase === "idle" ? 0.82 + eased * 0.18 : 1;
    const baseScale = targetScale * introScale;
    modelGroup.position.set(0, 0, 0);
    modelGroup.rotation.x = 0;
    modelGroup.rotation.z = 0;
    modelGroup.scale.setScalar(baseScale);
    if (state.autoRotate && !state.crossSection && stageSwitch.phase === "idle") modelGroup.rotation.y += 0.004;
    updateSplitAnimation();
    updateSplitCamera();
  }
  if (els.specimenImage) {
    const drift = state.autoRotate ? Math.sin(now * 0.0008) * 1.35 : 0;
    els.specimenImage.style.setProperty("--specimen-rotate", `${drift}deg`);
  }
  updateCameraTween(now);
  controls.update();
  positionLabels();
  renderer.render(scene, camera);
}

bindEvents();
updateAll();
resize();
openOnboardingPrompt();
document.body.classList.add("app-ready");
document.querySelector("#boot-status")?.setAttribute("hidden", "");
requestAnimationFrame(animate);
