export const projects = [
  {
    id: 1,
    slug: "school-management-system",
    name: "School Management System",
    description:
      "A comprehensive web-based school management system for managing students, teachers, and classes.",
    longDescription:
      "Built during my academic tenure, this Django-based system streamlined administrative tasks for schools. It includes role-based access control for administrators, teachers, and students with reporting and operational workflows.",
    highlights: [
      "Role-based modules for admin, teacher, and student users",
      "Student enrollment, attendance tracking, and grade management",
      "Scheduling and reporting utilities for school operations",
    ],
    techStack: ["Python", "Django", "PostgreSQL", "Bootstrap", "JavaScript"],
    github: "https://github.com/mzaheen610/school-management-system",
    demo: null,
    image: "/images/school-management.png",
    category: "fullstack",
    source: "Portfolio",
  },
  {
    id: 2,
    slug: "image-compression-svd",
    name: "Image Compression using SVD",
    description:
      "Applied Singular Value Decomposition for efficient grayscale image compression with minimal quality loss.",
    longDescription:
      "A machine learning and linear algebra project that compresses images using SVD while balancing reconstruction quality and size reduction.",
    highlights: [
      "Implemented SVD-based compression pipeline in Python",
      "Analyzed quality-size tradeoff across rank values",
      "Visualized output quality with reproducible experiments",
    ],
    techStack: ["Python", "NumPy", "OpenCV", "Matplotlib", "Scikit-learn"],
    github: "#",
    demo: null,
    image: "/images/image-compression.png",
    category: "ml",
    source: "Portfolio",
  },
  {
    id: 3,
    slug: "shoplinky-virtual-product-placement",
    name: "ShopLinky Virtual Product Placement",
    description:
      "A computer vision pipeline that places virtual products into real scenes for interactive retail previews.",
    longDescription:
      "Developed a virtual placement workflow for product visualization in real-world environments, focusing on alignment quality and visual realism for e-commerce use cases.",
    highlights: [
      "Designed object placement and alignment workflows",
      "Improved consistency of product placement across scenes",
      "Supported interactive ad and retail preview use cases",
    ],
    techStack: ["Python", "OpenCV", "Computer Vision", "Image Processing"],
    github: "#",
    demo: null,
    image: "/images/shoplinky_virtual_product_placement.png",
    category: "cv",
    source: "Portfolio + Resume",
  },
  {
    id: 4,
    slug: "virtual-product-placement-scene-mapping",
    name: "Virtual Product Placement - Scene Mapping",
    description:
      "A scene-mapping experiment for perspective-aware virtual product placement.",
    longDescription:
      "Implemented scene-aware placement for tabletop contexts with geometric transforms and calibration to improve realism in generated previews.",
    highlights: [
      "Perspective-aware product placement",
      "Scene calibration and transform refinement",
      "Improved realism for generated visualization outputs",
    ],
    techStack: ["Python", "OpenCV", "Geometry", "Image Processing"],
    github: "#",
    demo: null,
    image: "/images/virtual_product_placement_can_on_table.png",
    category: "cv",
    source: "Portfolio",
  },
  {
    id: 5,
    slug: "barn-challenge-rl-ppo-training",
    name: "BARN Challenge RL PPO Training",
    description:
      "A reinforcement learning setup for robot navigation using PPO in cluttered environments.",
    longDescription:
      "Trained and evaluated a PPO-based navigation policy for obstacle-rich robotics benchmarks with focus on reward shaping and policy stability.",
    highlights: [
      "PPO training for cluttered navigation maps",
      "Reward shaping for stable policy updates",
      "Benchmark-style evaluation under varied map conditions",
    ],
    techStack: ["Python", "Reinforcement Learning", "PPO", "Simulation"],
    github: "#",
    demo: null,
    image: "/images/icra_BARN_challenge_RL_PPO_training.png",
    category: "robotics",
    source: "Portfolio",
  },
  {
    id: 6,
    slug: "embedded-lab-mapping-ros",
    name: "Embedded Lab Mapping with ROS",
    description:
      "A robotics mapping setup using ROS-based navigation and map generation workflows.",
    longDescription:
      "Built and tested a ROS mapping pipeline with hardware integration for map generation and navigation validation in constrained indoor environments.",
    highlights: [
      "Integrated ROS mapping stack on embedded platform",
      "Validated mapping consistency in indoor lab conditions",
      "Combined sensor streams for map quality verification",
    ],
    techStack: ["ROS", "Python", "SLAM", "Embedded Systems", "Linux"],
    github: "#",
    demo: null,
    image: "/images/embedded_lab_map_ros.png",
    category: "robotics",
    source: "Portfolio",
  },
  {
    id: 7,
    slug: "robotics-hardware-integration-setup",
    name: "Robotics Hardware Integration Setup",
    description:
      "Hardware setup and validation workflow for robotics experiments, sensors, and compute integration.",
    longDescription:
      "Documented and validated hardware assembly and bring-up process for robotics experiments, including connectivity checks and deployment readiness.",
    highlights: [
      "End-to-end hardware bring-up checklist",
      "Sensor and compute integration validation",
      "Deployment readiness and failure-mode checks",
    ],
    techStack: ["Embedded Systems", "Robotics", "Linux", "Sensor Integration"],
    github: "#",
    demo: null,
    image: "/images/hardware_setup.jpeg",
    category: "embedded",
    source: "Portfolio",
  },
  {
    id: 8,
    slug: "drywall-qa-prompted-segmentation",
    name: "Prompted Segmentation for Drywall QA",
    description:
      "Fine-tuned YOLOE segmentation for drywall taping-area and crack detection with prompt-based outputs.",
    longDescription:
      "Built an end-to-end drywall quality assessment pipeline by combining datasets, generating segmentation masks, fine-tuning YOLOE-26s-seg, and evaluating per-prompt IoU and Dice metrics.",
    highlights: [
      "Merged two datasets into a clean segmentation training set",
      "Fine-tuned YOLOE-26s-seg with prompt classes: taping-area and crack",
      "Generated binary masks and evaluated mIoU and Dice per prompt",
    ],
    techStack: ["Python", "YOLOE", "Ultralytics", "OpenCV", "Roboflow", "GroundedSAM"],
    github: "#",
    demo: null,
    image: "/images/visual_results.png",
    category: "cv",
    source: "Notebook Project",
  },
  {
    id: 9,
    slug: "rtos-distributed-digital-twin",
    name: "RTOS-Based Distributed Digital Twin",
    description:
      "A cyber-physical digital twin for an industrial temperature chamber using RTOS and distributed telemetry.",
    longDescription:
      "Developed a distributed digital twin architecture using Raspberry Pi, ESP8266, and remote services with deterministic task scheduling and real-time telemetry over TCP/IP and MQTT.",
    highlights: [
      "Built cyber-physical twin of an industrial chamber",
      "Implemented FreeRTOS scheduling for acquisition and control",
      "Streamed telemetry over MQTT and TCP/IP with robust HAL support",
    ],
    techStack: ["FreeRTOS", "C", "Raspberry Pi", "ESP8266", "MQTT", "TCP/IP"],
    github: "#",
    demo: null,
    image: "/images/hardware_setup.jpeg",
    category: "embedded",
    source: "Resume",
  },
  {
    id: 10,
    slug: "multimodal-sensor-fusion-autonomous-navigation",
    name: "Multimodal Sensor Fusion Based Autonomous Navigation System",
    description:
      "ROS 2 navigation system combining LiDAR-IMU sensor fusion and SLAM for robust localization and mapping.",
    longDescription:
      "Consolidated sensor-fusion navigation work into one canonical project: LiDAR-IMU EKF state estimation, SLAM toolbox mapping, and embedded deployment tuning for real-time operation.",
    highlights: [
      "LiDAR-IMU EKF with low-latency state estimation",
      "SLAM toolbox and occupancy grid mapping integration",
      "Embedded deployment optimization under CPU and memory constraints",
    ],
    techStack: ["ROS 2", "C++", "Python", "SLAM", "EKF", "Raspberry Pi"],
    github: "#",
    demo: null,
    image: "/images/embedded_lab_map_ros.png",
    category: "robotics",
    source: "Resume",
  },
  {
    id: 11,
    slug: "fir-filter-atmega32",
    name: "FIR Filter Implementation on ATmega32",
    description:
      "Designed and deployed an FIR low-pass filter on ATmega32 with real-time hardware validation.",
    longDescription:
      "Designed FIR filters in MATLAB and implemented them in embedded C on ATmega32, then analyzed runtime and signal behavior through oscilloscope-based hardware testing.",
    highlights: [
      "Designed FIR filter in MATLAB toolchain",
      "Deployed Embedded C implementation to ATmega32",
      "Validated signal response with oscilloscope measurements",
    ],
    techStack: ["Embedded C", "MATLAB", "ATmega32", "Microchip Studio"],
    github: "#",
    demo: null,
    image: "/images/hardware_setup.jpeg",
    category: "embedded",
    source: "Resume",
  },
  {
    id: 12,
    slug: "rag-system-llamaindex-ollama",
    name: "Retrieval-Augmented Generation (RAG) System",
    description:
      "A local RAG pipeline for querying PDF knowledge bases with semantic retrieval and context-aware responses.",
    longDescription:
      "Built a Python RAG application with LlamaIndex, Ollama, and ChromaDB to support natural-language Q&A over document corpora with optimized retrieval quality.",
    highlights: [
      "Document indexing and chunking pipeline for PDF knowledge bases",
      "Semantic search with vector embeddings in ChromaDB",
      "Context-aware local inference using Ollama-hosted LLM",
    ],
    techStack: ["Python", "LlamaIndex", "Ollama", "ChromaDB", "RAG"],
    github: "#",
    demo: null,
    image: "/images/school-management.png",
    category: "ai",
    source: "Resume",
  },
  {
    id: 13,
    slug: "q-learning-grid-world",
    name: "Q-Learning Agent on an NxN Grid World",
    description:
      "A reinforcement learning agent for stochastic pathfinding with configurable training hyperparameters.",
    longDescription:
      "Implemented Q-learning in a grid world environment and built CLI-based controls to study convergence and policy behavior across learning-rate and exploration settings.",
    highlights: [
      "Q-table updates with Bellman optimality equation",
      "Convergence validation in under controlled episodes",
      "CLI tooling for hyperparameter experiments",
    ],
    techStack: ["Python", "Gymnasium", "Reinforcement Learning", "Q-Learning"],
    github: "#",
    demo: null,
    image: "/images/icra_BARN_challenge_RL_PPO_training.png",
    category: "ml",
    source: "Resume",
  },
  {
    id: 14,
    slug: "embedded-ml-adaptive-cruise-control",
    name: "Embedded Machine Learning Model for Adaptive Cruise Control",
    description:
      "A quantized TensorFlow Lite model for low-latency adaptive cruise inference on edge hardware.",
    longDescription:
      "Trained a supervised model to approximate classical PID behavior for following-distance control, then quantized and deployed to Raspberry Pi for real-time edge inference.",
    highlights: [
      "Supervised learning from PID-generated control data",
      "Post-training quantization for edge deployment",
      "Latency and memory validation on Raspberry Pi",
    ],
    techStack: ["TensorFlow", "TensorFlow Lite", "Keras", "Python", "Raspberry Pi"],
    github: "#",
    demo: null,
    image: "/images/hardware_setup.jpeg",
    category: "embedded",
    source: "Resume",
  },
];

export const projectBySlug = projects.reduce((acc, project) => {
  acc[project.slug] = project;
  return acc;
}, {});
