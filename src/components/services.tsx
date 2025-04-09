"use client"

import useEmblaCarousel  from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react'


const services = [
{    title: "Banho e Tosa",
    description: "Inclui banho com produtos especificos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada.",
    duration: "1h",
    price: "$50",
    icon: <Scissors/>,
    linkText: "Olá, vi no site sobre banho e tosa e gostaria de mais informações."
},
{    title: "Consulta veterinária",
    description: "Oferece atendimento clínico, básico ou especializado para cuidar da saúde do seu animal. Inclui diagnóstico de doenças, aplicação de vacinas obrigatórias.",
    duration: "1h",
    price: "$45",
    icon: <Syringe/>,
    linkText: "Olá, vi no site sobre banho e tosa e gostaria de mais informações."
},
{    title: "Táxi Pet",
    description: "Serviço de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais. Ideal para tutores que não têm tempo ou transporte adequado para locomover os animais.",
    duration: "2h",
    price: "$80",
    icon: <CarTaxiFront/>,
    linkText: "Olá, vi no site sobre banho e tosa e gostaria de mais informações."
},
{    title: "Hotel de Pets",
    description: "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros e confortáveis.",
    duration: "1h",
    price: "$60",
    icon: <Hotel/>,
    linkText: "Olá, vi no site sobre banho e tosa e gostaria de mais informações."
}
]



export function Services() {

    const [emblaRef, emblaApi ] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)" : { slidesToScroll: 3}
        }
    })

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }





    return(
        <section className="bg-white py-16 ">
            <div className="container mx-auto px-4">

                <h2 className="text-4xl font-bold mb-12">Serviços</h2>

                <div className="relative">
                    <div className='overflow-hidden ' ref={emblaRef}>
                        <div className='flex'>
                            {services.map((item, index) => (
                                <div key={index} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3'>
                                    <article className='bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>
                                        <div className='flex-1 flex items-start justify-between'>

                                            <div className='flex gap-3'>
                                                <span className='text-3xl'>{item.icon}</span>
                                                <div>
                                                    <h3 className='font-bold text-xl my-1 select-none'>{item.title}</h3>
                                                    <p className='text-gray-400 text-sm select-none'>
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>

                                        </div>

                                        <div className='border-t border-gray-700 pt-4 flex items-center justify-between'>
                                            <div className='flex items-center gap-2 text-sm'>
                                                <Clock className='w-4 h-4'/>
                                                <span>{item.duration}</span>
                                            </div>
                                            <a
                                            href='#'
                                            className='flex items-center justify-center gap-2 hover:bg-red-500 px-5 py-1 duration-500 rounded-md '
                                            
                                            >
                                                <WhatsappLogo className='w-5 h-5'/>
                                                Entrar em contato
                                            </a>

                                        </div>

                                    </article>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>

                
            
            </div>
        </section>
    )
}