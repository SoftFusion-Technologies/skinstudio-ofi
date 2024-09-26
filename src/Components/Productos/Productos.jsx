import { useEffect } from 'react';
import{
    Product1,
    Product2,
    Product3,
    //Product4,
    //Product5,
    Product6,
    //Product7,
    //Product8,
    //Promo1,
    Promo2,
    Promo3,
    brumavitc,
    brumarosas,
    brumatermal,
    emulsionrosas,
    serumrose,
    SerumSalicilico,
    SerumGlicolico,
    aguamicelar,
    Emulsion2,
    Emulsionfacial,
    EmulsionGN,
    Gelflores,
    Gelsalisylic,
    LocionACS,
    MaskAntiacne,
    Maskarilla,
    MaskTea,
    MaskTermal,
    ExfolianteScrub,
    ExfoliantePads,
    JaleaDesp,
    serumA,
    glow,
    Suero,
    Suero1,
    Protector,
    RollC,
    LipSerum,
    Kitviaje,
    Micelarxl,
    
} from './products';

import { useNavigate } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Productos = () => {
    const navigate = useNavigate(); 

    useEffect(() => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    requestAnimationFrame(scrollToTop);
    }, []);

   const sections = [
    {
        title: 'Limpieza',
        products: [
            { 
                src: Product2, 
                alt: 'Gel de Limpieza Facial',
                description: 'Este gel de limpieza facial elimina impurezas y exceso de grasa sin alterar la barrera natural de la piel. Enriquecido con ingredientes calmantes, deja la piel fresca y equilibrada.',
                name: 'Gel de Limpieza Facial' 
            },
            { 
                src: Product3, 
                alt: 'Gel de Limpieza con Ácido Salicílico',
                description: 'Formulado con ácido salicílico, este gel de limpieza ayuda a desobstruir poros y prevenir brotes. Su acción exfoliante suave elimina las células muertas y deja la piel clara y radiante.',
                name: 'Gel de Limpieza Ac.' 
            },
            { 
              src: aguamicelar, 
              alt: 'Agua Micelar',
              description: 'El agua micelar es un limpiador suave que elimina maquillaje y suciedad, dejando la piel hidratada y fresca. Ideal para todo tipo de piel, su fórmula suave no requiere enjuague y es perfecta para uso diario.',
              name: 'Agua Micelar' 
            },
            { 
              src: Gelflores, 
              alt: 'Gel Flores y Frutos del Bosque',
              description: 'GEL DE LIMPIEZA DIARIO: limpia en profundidad, refresca la piel, suaviza y calma, eliminando impurezas, grasitud y restos de maquillaje sin dejar sensación de piel seca o irritada; ideal para pieles grasas, mixtas y sensibles.',
              name: 'Gel Flores y Frutos del Bosque' 
            },
            { 
              src: Gelsalisylic, 
              alt: 'Gel de Limpieza Profunda Salisylic',
              description: 'Gel limpiador facial de limpieza profunda con acido salicílico. Rompe el comedón dejando limpio el poro.',
              name: 'Gel de Limpieza Profunda Salisylic' 
            },
            
        ],
    },
    {
      title: 'Hidratación',
      products: [
          { 
              src: Product1, 
              alt: 'Crema Anti Age',
              description: 'Esta crema anti edad está formulada con ingredientes potentes que ayudan a reducir las arrugas y mejorar la elasticidad de la piel. Su textura ligera se absorbe rápidamente, proporcionando hidratación profunda y un aspecto rejuvenecido.',
              name: 'Crema Anti Age' 
          },
          { 
            src: serumrose, 
            alt: 'Serum / Ácido Hialuronico',
            description: 'Logra una piel hidratada, elástica y fresca. Su rápida absorción lo convierte en un producto apto para todos los tipos de pieles',
            name: 'Serum Hyaluronic Rose ' 
          },
          {
            src: glow, 
            alt: 'Serum Glow N Plus',
            description: 'Neutraliza radicales libres, unifica el tono, hidrata, rellena, reafirma, repara la barrera de la piel, despigmenta, ilumina y suaviza.',
            name: 'Serum Glow N Plus' 
          },
      ],
    },
    {
      title: 'Exfoliantes',
        products: [
          { 
            src: Product6, 
            alt: 'Loción Ac. Salicílico',
            description: 'La loción con ácido salicílico es perfecta para tratar y prevenir imperfecciones. Su fórmula ligera penetra profundamente en la piel, ayudando a controlar el exceso de grasa y mejorando visiblemente la textura de la piel.',
            name: 'Loción Ac' 
          },
          { 
            src: ExfoliantePads, 
            alt: 'Renew Pads Exfoliantes',
            description: 'Es un tratamiento de renovación celular que combina el efecto Exfoliante y regenerador de los activos del disco.',
            name: 'Renew Pads Exfoliantes' 
          },
          { 
            src: ExfolianteScrub, 
            alt: 'Scrub Exfoliante de Ducha',
            description: 'Scrub Exfoliante Corporal y Facial: exfolia, renueva y suaviza la piel. Realiza un pulido en la piel para su total renovación dejando aroma a lavandas y vainilla.',
            name: 'Scrub Exfoliante de Ducha' 
          },
          { 
            src: LocionACS, 
            alt: 'Locion Ácido Salicílico',
            description: 'LOCION EN SPRAY CON ACIDO SALICILICO, EXFOLIA LA PIEL REMOVIENDO CELULAS MUERTAS.',
            name: 'Locion Ácido Salicílico' 
          },
        ]
    },
    {
      title: 'Renovadores',
      products: [
          { 
              src: SerumSalicilico, 
              alt: 'Serum / Ácido Salicílico',
              description: 'Este sérum de tratamiento está formulado con ácido salicílico, un poderoso exfoliante que penetra profundamente en los poros para eliminar impurezas y células muertas.',
              name: 'Serum Ácido Salicílico' 
          },
          { 
            src: SerumGlicolico, 
            alt: 'Serum / Ácido Glicólico',
            description: 'Nuestro serum de ácido glicólico exfolia suavemente la piel, eliminando las células muertas y promoviendo una textura más suave. Ideal para combatir manchas y mejorar el tono de la piel, dejando un acabado luminoso y radiante.',
            name: 'Serum Ácido Glicólico' 
          }
      ],
    },
    {
      title: 'Despigmentantes',
        products: [
          {
            src: JaleaDesp, 
            alt: 'Jalea Despigmentante',
            description: 'Equilibrada combinacion de Alfa Hidroxiacidos ( Glicolico, Citrico , Lactico ) ideal para eliminar manchas en zonas como Axilas , Bozo , Cavado ,producidas muchas veces por la depilacion',
            name: 'Jalea Despigmentante' 
          },
          {
            src: serumA, 
            alt: 'Serum A Plus Retinol',
            description: 'Serum de rápida absorción. Promueve la renovación celular de la epidermis y evita que las células nuevas envejezcan rápidamente. Por su condición liposoluble penetra a capas mas profundas, aumenta la producción de colágeno, este se muestra implacable renovando la piel logrando que se vea mas tersa y suave.',
            name: 'Serum A Plus Retinol' 
          },
          {
            src: Suero, 
            alt: 'Serum Aclarant',
            description: 'COMPLEJO UTRA DESPIGMENTANTE 365. Son PLURI-ACTIVOS ACLARANTES que pueden utilizarse los 365 dias del año.',
            name: 'Serum Aclarant' 
          },
          {
            src: Suero1, 
            alt: 'Suero de Vitamina C al 10%',
            description: 'Ácido Ascórbico 10%: Vitamina C en forma pura. Alto poder despigmentante y antioxidante. Suaviza manchas e ilumina.',
            name: 'Suero de Vitamina C' 
          }
        ],
    },
    {
        title: 'Tonicos y Bruma',
        products: [
          {
            src: brumavitc,
            alt: 'Bruma Vitamina C',
            description: 'Esta Bruma ideal para el verano refresca e ilumina la piel, descongestiona y calma.',
            name: 'Bruma Vitamina C'
          },
          {
            src: brumarosas,
            alt: 'Bruma Agua de Rosas',
            description: 'Este tónico natural es lo que todas debemos tener en cuenta en nuestra rutina de belleza. Ideal para usarla todos los días, apta todos los tipos de pieles.',
            name: 'Bruma Agua de Rosas'
          },
          {
            src: brumatermal,
            alt: 'Bruma Termal',
            description:'AGUA TERMAL MINEROMEDICINAL ORIGEN TIERRAS PATAGONICAS NATURALES. Lo que hace diferentes a las aguas termales es el origen. El líquido elemento procede de fuentes termales y esto hace que tengan unas propiedades añadidas diferentes a los demás tipos de tratamientos: contienen una serie de minerales con importantes propiedades naturales.',
            name: 'Bruma Termal'
          }
        ],
    },
    

    {
      title: 'Emulsiones',
      products: [
        {
          src: emulsionrosas,
          alt: 'Emulsion con Agua de Rosas',
          description: 'Hidrata el rostro sin dejar sensacion grasosa, fluida y de rápida absorción. Apta todo tipo de piel, en especial piel mixta, grasa y sensible.',
          name: 'Emulsion con Agua de Rosas'
        },
        {
          src: Emulsion2,
          alt: 'Emulsion Corporal',
          description: 'El acido hialuronico hidrata profundamente la piel por su capacidad de retener agua. En la forma emulsion permite una rápida absorción sin dejar sensación grasa en la piel del cuerpo.',
          name: 'Emulsion Corporal con Ácido Hialurónico'
        },
        {
          src: Emulsionfacial,
          alt: 'Emulsion Hyaluronic',
          description: 'Hidrata el rostro sin dejar sensacion grasosa, fluida y de rápida absorción. Apta todo tipo de piel. Hidrata profundamente, rellena y reafima.',
          name: 'Emulsion Hyaluronic'
        },
        {
          src: EmulsionGN,
          alt: 'Emulsion Glow N',
          description: 'Emulsion hidratante con Niacinamida, Acido Hialuronico y Te Verde. HIDRATA E ILUMINA. Unifica el tono.Despigmentante y Seborregulador',
          name: 'Emulsion Glow N'
        },
      ],
    },
    {
      title: 'Mascarillas',
        products: [
          {
            src: MaskAntiacne,
            alt: 'Mascarilla Detox',
            description: 'Nuestra mascarilla Detox es la combinación perfecta de cuidado y prevención. Sus componentes son ideales para pieles grasas, pieles mixtas, pieles. acneicas, poros abiertos y muchos puntos negros.',
            name: 'Mascarilla Detox',
          },
          {
            src: Maskarilla,
            alt: 'Mascarilla Hyaluronic',
            description: 'Es ideal para hidratar el rostro profundamente. Perfecta para todo tipo de pieles en especial pieles secas y deshidratadas',
            name: 'Mascarilla Hyaluronic',
          },
          {
            src: MaskTea,
            alt: 'Mascarilla con Tea Tree',
            description: 'Nuestra mascarilla Tea TREE es simplemente perfecta para nutrir y desinflamar nuestro rostro después de una rutina agitada. Sus componentes son ideales para pieles grasas, pieles mixtas, pieles acneicas, poros abiertos, pieles desnutridas y averiadas.',
            name: 'Mascarilla con Tea Tree',
          },
          {
            src: MaskTermal,
            alt: 'Mask Termal B5',
            description: 'Es una mascarilla multiuso, para utilizar en rostro y labios. Se puede aplicar también para promover la cicatrización como tatuajes o heridas superficiales, en irritaciones y dermatitis por alergia.',
            name: 'Mask Termal B5',
          }
        ]
    },
    {
        title: 'Otros',
        products: [
            { 
                src: Promo2, 
                alt: 'Rutina Completa',
                description: 'Kit de cuidado completo para la piel que incluye todo lo necesario para limpiar, hidratar y proteger tu rostro. Ideal para mantener una piel sana y radiante todos los días.',
                name: 'Rutina Completa' 
            },
            {   
                src: Kitviaje, 
                alt: 'Kit de Viaje',
                description: 'Este kit incluye esenciales para tus viajes. Compacto y practico, perfecto para llevar. ',
                name: 'Kit de Viaje'
            },
            { 
              src: Protector, 
              alt: 'Protector Solar Facial FPS 50',
              description: 'Filtro UVB/UVA efecto seco matificante, protege e hidrata, repara la piel, unifica el tono, mejora apariencia, disminuye manchas y arrugas; protector solar 75 cc, especial para piel grasa a mixta, aporta hidratación, resiste al agua, rápida absorción, no contiene perfumes, libre de parabenos, libre de siliconas, cruelty free, sin TACC.',
              name: 'Protector Solar Facial FPS 50' 
            },
            { 
              src: RollC, 
              alt: 'Roll C Tratamiento para Ojeras',
              description: 'Debido al poder antioxidante y despigmentante del complejo de vitamina c, el Serum Roll C aclara ojeras pigmentadas. La presencia de Liposomas de cafeína, le confiere propiedades tonificantes favoreciendo la micro- circulación y reduciendo la retención de líquidos. El ácido hialuronico hidrata y el té verde actúa como antioxidante. Su envase ROLL le brinda un plus para que la aplicación en frío beneficie aún más a las ojeras y bolsas.',
              name: 'Roll C Tratamiento para Ojeras' 
            },
            { 
              src: LipSerum, 
              alt: 'Lip Care Serum Reparador Con Vitamina E',
              description: 'Repara y restaura. Hidrata en profundidad. Protege de agresiones externas. Resultado: Labios sanos y fuertes con un riquísimo aroma a frambuesas y coco.',
              name: 'Lip Care Serum Reparador Con Vitamina E' 
            },
            { 
              src: Micelarxl, 
              alt: 'Agua Micelar 3 en 1 XL',
              description: 'Limpia, desmaquilla y tonifica el rostro en un solo paso, suavemente sin dejar sensación grasa. Ideal para todo tipo de piel en especial pieles normales a secas.',
              name: 'Agua Micelar 3 en 1 XL' 
            },
            
        ],
    },
];


return (
  <div className="p-4 max-w-screen-lg mx-auto overflow-hidden">
    <div className="p-6">
      <h1 className="text-center text-pink-400 text-5xl font-bold mb-4 mt-4">
        PRODUCTOS
      </h1>
      {sections.map((section, index) => (
        <div key={index} className="mb-8 p-2 sm:p-4 rounded-lg shadow-lg">
          <h2 className="text-left text-pink-400 text-3xl font-semibold mb-2 border-b-2">
            {section.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
            {section.products.length === 2 ? (
              <div className="flex justify-center col-span-3">
                {section.products.map((product, productIndex) => {
                  const whatsappMessage = `Hola, quiero comprar ${product.name}`;
                  return (
                    <div
                      key={productIndex}
                      className="relative flex flex-col items-center mx-2 min-h-[500px]"
                    >
                      <img
                        src={product.src}
                        alt={product.alt}
                        className="w-full h-auto max-w-full rounded-lg shadow-md transition duration-300 ease-in-out"
                      />
                      <div
                        className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center rounded-lg opacity-0 
                                                        transition-opacity duration-300 ease-in-out hover:opacity-100"
                      >
                        <p className="text-white text-center p-2 ">
                          {product.description}
                        </p>
                        <a
                          href={`https://wa.me/3865213958?text=${encodeURIComponent(
                            whatsappMessage
                          )}`}
                          className="mt-2 bg-pink-400 text-white rounded-md py-1 px-4 text-center
                                                            transition duration-300 ease-in-out hover:bg-pink-500 hover:shadow-lg"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Comprar
                        </a>
                      </div>
                      <p className="mt-2 text-center uppercase text-pink-500 font-semibold text-lg shadow-sm">
                        {product.alt}
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : (
              section.products.map((product, productIndex) => {
                const whatsappMessage = `Hola, quiero comprar ${product.name}`;
                return (
                  <div
                    key={productIndex}
                    className="relative flex flex-col items-center group min-h-[500px]"
                  >
                    <img
                      src={product.src}
                      alt={product.alt}
                      className="w-full h-auto max-w-full rounded-lg shadow-md transition duration-300 ease-in-out"
                    />
                    <div
                      className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center rounded-lg opacity-0 
                                                transition-opacity duration-300 ease-in-out group-hover:opacity-100 overflow-hidden"
                    >
                      <p className="text-white text-center p-2">
                        {product.description}
                      </p>
                      <a
                        href={`https://wa.me/3865213958?text=${encodeURIComponent(
                          whatsappMessage
                        )}`}
                        className="mt-2 bg-pink-400 text-white rounded-md py-1 px-4 text-center 
                                                        transition duration-300 ease-in-out hover:bg-pink-500 hover:shadow-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Comprar
                      </a>
                    </div>
                    <p className="mt-2 text-center uppercase text-pink-500 font-semibold text-lg shadow-sm">
                      {product.alt}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>
      ))}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-pink-400 text-white rounded-md py-2 px-4 hover:bg-pink-500 transition duration-300"
        aria-label="Volver a la página anterior"
      >
        Volver Atrás
      </button>
    </div>
  </div>
);
};

export default Productos;