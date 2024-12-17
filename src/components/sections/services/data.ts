
import api from "./public/images/API.png";
import lambda from "./public/images/Lambda.png";
import iot from "./public/images/IoT.png";
import ec2 from "./public/images/EC2.png";
import rds from "./public/images/RDS.png";
import s3 from "./public/images/S3.png";

export const servicesSectionData = {
  title: "Telemetrik + AWS",
  subheading: {
    text1_1: "AWS + Telemetrik: ",
    text1_2: "Soluciones cloud que promueven la innovación para proteger el recurso hídrico",
    text2:
      "En Telemetrik, maximizamos el poder de Amazon Web Services (AWS) para proporcionar soluciones escalables de infraestructura, almacenamiento y servicios avanzados que aceleran la transformación digital, algunos de los servicios AWS que usamos son:",
  },
  services: [
    {
      title: "AWS LAMBDA",
      briefDescription:
        "Nuestro motor inteligente de automatización. Como un asistente digital que trabaja 24/7, Lambda ejecuta tareas complejas en segundos, sin que tengas que preocuparte por los servidores. Es como tener un equipo ultrarrápido que hace tu trabajo en segundo plano.",
      visual: lambda,
    },
    {
      title: "API GATEWAY",
      briefDescription:
        "El puente digital que conecta diferentes sistemas. Imagina un traductor súper eficiente que permite que distintas aplicaciones hablen entre sí sin problemas, facilitando el intercambio de información como si fuera un juego de niños.",
      visual: api,
    },
    {
      title: "IoT CORE",
      briefDescription:
        "El cerebro conectivo de dispositivos inteligentes. Transforma aparatos comunes en dispositivos inteligentes que pueden comunicarse entre sí y contigo, creando un ecosistema tecnológico donde todo está sincronizado y bajo control.",
      visual: iot,
    },
    {
      title: "EC2",
      briefDescription:
        "Tu computadora virtual a la carta. Es como tener un superpoder que te permite crear y usar computadoras instantáneamente, escalando recursos según tus necesidades, sin invertir en hardware costoso.",
      visual: ec2,
    },
    {
      title: "RDS",
      briefDescription:
        "La bóveda digital de tu información. Organiza y protege tus datos como un archivista maestro, permitiéndote guardar, buscar y gestionar información de manera segura y eficiente.",
      visual: rds,
    },
    {
      title: "S3",
      briefDescription:
        "Tu almacén digital infinito. Un lugar donde puedes guardar cualquier cantidad de archivos, documentos e información, como si tuvieras un bodegón virtual que nunca se llena y al que puedes acceder desde cualquier lugar.",
      visual: s3,
    },
  ],
  callToAction:
    "Discover the Future of Green Energy. Choose Your Sustainable Solution Today!",
  buttonText: "Explore More",
};
