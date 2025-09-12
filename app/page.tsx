"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Calendar,
  GraduationCap,
  CheckCircle,
  Clock,
  Star,
  ChevronDown,
  Palette,
  Code,
  Gamepad2,
  Settings,
  Monitor,
  Headphones,
  Video,
  FileText,
  Users,
  BarChart3
} from 'lucide-react'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('inicio')

  // Smooth scroll navigation
  const scrollToSection = (sectionId: string) => {
    console.log('Scrolling to section:', sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    console.log('Portfolio component mounted')
    const handleScroll = () => {
      const sections = ['inicio', 'introduccion', 'habilidades', 'formacion', 'proyectos', 'contacto']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current && current !== activeSection) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-black" data-macaly="nav-name">
              Javier Castro Magro
            </h1>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'inicio', label: 'Inicio' },
                { id: 'introduccion', label: 'Introducción' },
                { id: 'habilidades', label: 'Habilidades' },
                { id: 'formacion', label: 'Formación' },
                { id: 'proyectos', label: 'Proyectos' },
                { id: 'contacto', label: 'Contacto' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors ${
                    activeSection === item.id 
                      ? 'text-red-500 font-medium' 
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center bg-white pt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <img
              src="https://assets.macaly-user-data.dev/ps1zy954gt1584z8nrr5vdeh/new-chat/t_6euS3zQJ8wQfeLy4IFV/foto-perfil-giy-hub-wither.jpg"
              alt="Javier Castro Magro"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-black"
              data-macaly="profile-image"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4" data-macaly="hero-name">
            Javier Castro Magro
          </h1>
          
          <p className="text-xl text-gray-600 mb-8" data-macaly="hero-subtitle">
            Artista Digital & Desarrollador de Videojuegos
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              onClick={() => scrollToSection('introduccion')}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg"
            >
              Conoce más
            </Button>
            <Button 
              onClick={() => scrollToSection('contacto')}
              variant="outline" 
              className="border-red-500 text-red-500 hover:bg-red-50 px-8 py-3 text-lg"
            >
              Contacto
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://x.com/JSILVER_999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-500 transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="https://github.com/JavierCastroMagro03" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-500 transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/javier-castro-b4a472375/?trk=opento_sprofile_details" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-500 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://silver999.artstation.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-500 transition-colors"
            >
              <Palette size={24} />
            </a>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={() => scrollToSection('introduccion')}
              className="text-red-500 hover:text-red-600 transition-colors animate-bounce"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduccion" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4" data-macaly="intro-title">
              Introducción
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6" data-macaly="intro-subtitle">
                Conoceme
              </h3>
              
              <div className="text-gray-300 text-lg leading-relaxed space-y-6">
                <p data-macaly="intro-text-1">
                  Soy Javier Castro Magro estudiante de Diseño y Desarrollo de Videojuegos en la Universidad Rey Juan Carlos.
                </p>
                
                <p data-macaly="intro-text-2">
                  Durante el curso 2025-2026 planifico terminar la carrera haciendo las prácticas y el Trabajo de Fin de Grado.
                </p>
                
                <p data-macaly="intro-text-3">
                  Me he especializado en la parte artística de los videojuegos aunque también tengo una base sólida en diferentes lenguajes de la programación.
                </p>
                
                <p data-macaly="intro-text-4">
                  También tengo otras pasiones a parte de los videojuegos como son la tecnología, el deporte y el mundo del motor.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-8">
                <Badge variant="destructive" className="bg-red-500 text-white px-4 py-2 text-sm">
                  Arte Digital
                </Badge>
                <Badge variant="destructive" className="bg-red-500 text-white px-4 py-2 text-sm">
                  Programación
                </Badge>
                <Badge variant="destructive" className="bg-red-500 text-white px-4 py-2 text-sm">
                  Game Dev
                </Badge>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full border-4 border-white overflow-hidden">
                <img
                  src="https://assets.macaly-user-data.dev/ps1zy954gt1584z8nrr5vdeh/new-chat/t_6euS3zQJ8wQfeLy4IFV/foto-perfil-giy-hub-wither.jpg"
                  alt="Javier Castro Magro"
                  className="w-full h-full object-cover"
                  data-macaly="intro-profile-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4" data-macaly="skills-title">
              Habilidades
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Arte Digital */}
            <Card className="border-2 border-gray-100 hover:border-red-500 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Palette className="text-red-500 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-red-500">Arte Digital</h3>
                </div>
                <p className="text-gray-600 mb-6 text-sm">Herramientas de diseño y modelado</p>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">3D</h4>
                      <div className="space-y-2">
                        <div><Badge className="bg-black text-white px-3 py-1 text-sm">Blender</Badge></div>
                        <div><Badge className="bg-black text-white px-3 py-1 text-sm">3DS Max</Badge></div>
                        <div><Badge className="bg-black text-white px-3 py-1 text-sm">BlockBench</Badge></div>
                        <div><Badge className="bg-black text-white px-3 py-1 text-sm">Substance Painter 3D</Badge></div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">2D</h4>
                      <div className="space-y-2">
                        <div><Badge className="bg-black text-white px-3 py-1 text-sm">Photoshop</Badge></div>
                        <div><Badge className="bg-black text-white px-3 py-1 text-sm">Krita</Badge></div>
                        <div><Badge className="bg-black text-white px-3 py-1 text-sm">Illustrator</Badge></div>
                        <div><Badge className="bg-black text-white px-3 py-1 text-sm">Aseprite</Badge></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Programación */}
            <Card className="border-2 border-gray-100 hover:border-red-500 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Code className="text-red-500 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-red-500">Programación</h3>
                </div>
                <p className="text-gray-600 mb-6 text-sm">Lenguajes y tecnologías de desarrollo</p>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div><Badge className="bg-black text-white px-3 py-1 text-sm">Java</Badge></div>
                      <div><Badge className="bg-black text-white px-3 py-1 text-sm">C++</Badge></div>
                      <div><Badge className="bg-black text-white px-3 py-1 text-sm">C#</Badge></div>
                      <div><Badge className="bg-black text-white px-3 py-1 text-sm">Python</Badge></div>
                      <div><Badge className="bg-black text-white px-3 py-1 text-sm">HTML</Badge></div>
                      <div><Badge className="bg-black text-white px-3 py-1 text-sm">FabricMC</Badge></div>
                    </div>
                    <div className="space-y-2">
                      <div><Badge className="bg-black text-white px-3 py-1 text-sm">CSS</Badge></div>
                      <div><Badge className="bg-black text-white px-3 py-1 text-sm">SQLite</Badge></div>
                      <div><Badge className="bg-black text-white px-3 py-1 text-sm">SQL</Badge></div>
                      <div><Badge className="bg-black text-white px-3 py-1 text-sm">MongoDB</Badge></div>
                      <div><Badge className="bg-black text-white px-3 py-1 text-sm">GitHub</Badge></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Motores y Herramientas */}
            <Card className="border-2 border-gray-100 hover:border-red-500 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Settings className="text-red-500 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-red-500">Motores y Herramientas</h3>
                </div>
                <p className="text-gray-600 mb-6 text-sm">Desarrollo de juegos y gestión de proyectos</p>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div><Badge className="bg-black text-white px-3 py-1 text-sm">Unity</Badge></div>
                      <div><Badge className="bg-black text-white px-3 py-1 text-sm">Audacity</Badge></div>
                      <div><Badge className="bg-black text-white px-3 py-1 text-sm">OBS</Badge></div>
                    </div>
                    <div className="space-y-2">
                      <div><Badge className="bg-black text-white px-3 py-1 text-sm">Notion</Badge></div>
                      <div><Badge className="bg-black text-white px-3 py-1 text-sm">Miro</Badge></div>
                      <div><Badge className="bg-black text-white px-3 py-1 text-sm">Jira</Badge></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="formacion" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4" data-macaly="education-title">
              Formación
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            {/* Diseño y Desarrollo de Videojuegos */}
            <Card className="bg-white border-2 border-gray-100">
              <CardContent className="p-8">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    <div className="w-16 h-16 border-2 border-red-500 rounded-lg flex items-center justify-center mr-0 sm:mr-6 mb-4 sm:mb-0">
                      <GraduationCap className="text-red-500" size={32} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-2">
                        <h3 className="text-xl font-semibold text-black">Diseño y Desarrollo de Videojuegos</h3>
                        <Badge className="bg-orange-500 text-white sm:mt-0 mt-2 w-fit">En proceso</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-gray-600 text-sm mb-4 flex-wrap">
                        <span className="flex items-center">
                          <GraduationCap size={16} className="mr-1" />
                          Universidad Rey Juan Carlos
                        </span>
                        <span className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          Madrid, España
                        </span>
                        <span className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          2021 - Presente
                        </span>
                      </div>
                      <p className="text-gray-700">
                        Formación en diseño y desarrollo de videojuegos, cubriendo desde programación y diseño hasta gestión de proyectos y experiencia de usuario. Pendiente de TFG y prácticas.
                      </p>
                      {/* Nota para móvil */}
                      <div className="flex sm:hidden items-center text-green-500 font-semibold mt-4">
                        <Star size={16} className="mr-1" />
                        7.71/10
                      </div>
                    </div>
                  </div>

                  {/* Nota solo para escritorio */}
                  <div className="hidden sm:flex items-center text-green-500 font-semibold ml-4">
                    <Star size={16} className="mr-1" />
                    7.71/10
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bachillerato */}
            <Card className="bg-white border-2 border-gray-100">
              <CardContent className="p-8">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    <div className="w-16 h-16 border-2 border-red-500 rounded-lg flex items-center justify-center mr-0 sm:mr-6 mb-4 sm:mb-0">
                      <GraduationCap className="text-red-500" size={32} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-2">
                        <h3 className="text-xl font-semibold text-black">Bachillerato de Ciencias y Tecnología</h3>
                        <Badge className="bg-green-500 text-white sm:mt-0 mt-2 w-fit">Finalizado</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-gray-600 text-sm mb-4 flex-wrap">
                        <span className="flex items-center">
                          <GraduationCap size={16} className="mr-1" />
                          Educación Secundaria
                        </span>
                        <span className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          2019 - 2021
                        </span>
                      </div>
                      <p className="text-gray-700">
                        Base sólida en ciencias y tecnología que complementa mi formación en desarrollo de videojuegos.
                      </p>
                      {/* Nota para móvil */}
                      <div className="flex sm:hidden items-center text-green-500 font-semibold mt-4">
                        <Star size={16} className="mr-1" />
                        8.94/10
                      </div>
                    </div>
                  </div>

                  {/* Nota solo para escritorio */}
                  <div className="hidden sm:flex items-center text-green-500 font-semibold ml-4">
                    <Star size={16} className="mr-1" />
                    8.94/10
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certificación de Inglés */}
            <Card className="bg-white border-2 border-gray-100">
              <CardContent className="p-8">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    <div className="w-16 h-16 border-2 border-red-500 rounded-lg flex items-center justify-center mr-0 sm:mr-6 mb-4 sm:mb-0">
                      <GraduationCap className="text-red-500" size={32} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-2">
                        <h3 className="text-xl font-semibold text-black">Certificación de Inglés</h3>
                        <Badge className="bg-green-500 text-white sm:mt-0 mt-2 w-fit">Finalizado</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-gray-600 text-sm mb-4 flex-wrap">
                        <span className="flex items-center">
                          <GraduationCap size={16} className="mr-1" />
                          TOEIC 810 puntos (Nivel B2)
                        </span>
                      </div>
                      <p className="text-gray-700">
                        Certificación oficial que demuestra competencia en inglés para el ámbito profesional y académico internacional.
                      </p>
                      {/* Nota para móvil */}
                      <div className="flex sm:hidden items-center text-green-500 font-semibold mt-4">
                        <Star size={16} className="mr-1" />
                        810 pts
                      </div>
                    </div>
                  </div>

                  {/* Nota solo para escritorio */}
                  <div className="hidden sm:flex items-center text-green-500 font-semibold ml-4">
                    <Star size={16} className="mr-1" />
                    810 pts
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section (Empty for now) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4" data-macaly="courses-title">
              Cursos
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-2 border-gray-100 hover:border-red-500 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 border-2 border-red-500 rounded-full mx-auto mb-4">
                  <Monitor className="text-red-500" size={32} />
                </div>
                <h3 className="text-black text-lg font-semibold mb-2">Eligiendo los componentes de tu nuevo PC</h3>
                <p className="text-gray-600 text-sm mb-4">Mastermind</p>
                <p className="text-gray-500 text-xs mb-4">2025</p>
                <Badge className="bg-green-500 text-white mb-4">Finalizado</Badge>
                <div>
                  <a 
                    href="https://mastermind.ac/curso/eligiendo-los-componentes-de-tu-nuevo-pc-2024" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-500 hover:text-red-600 text-sm"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Ver curso
                  </a>
                </div>
                <div>
                  <a 
                    href="/certificados/Certificado_eligiendoloscomponentesdetunuevopc.pdf"  // ruta al PDF
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-500 hover:text-red-600 text-sm"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Ver certificado
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-100 hover:border-red-500 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 border-2 border-red-500 rounded-full mx-auto mb-4">
                  <Monitor className="text-red-500" size={32} />
                </div>
                <h3 className="text-black text-lg font-semibold mb-2">Montaje de ordenadores</h3>
                <p className="text-gray-600 text-sm mb-4">Mastermind</p>
                <p className="text-gray-500 text-xs mb-4">2025</p>
                <Badge className="bg-green-500 text-white mb-4">Finalizado</Badge>
                <div>
                  <a 
                    href="https://mastermind.ac/curso/la-biblia-del-montaje-de-pc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-500 hover:text-red-600 text-sm"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Ver curso
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-100 hover:border-red-500 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 border-2 border-red-500 rounded-full mx-auto mb-4">
                  <Monitor className="text-red-500" size={32} />
                </div>
                <h3 className="text-black text-lg font-semibold mb-2">Historia y funcionamiento de la Tarjeta Gráfica</h3>
                <p className="text-gray-600 text-sm mb-4">Mastermind</p>
                <p className="text-gray-500 text-xs mb-4">2025</p>
                <Badge className="bg-green-500 text-white mb-4">Finalizado</Badge>
                <div>
                  <a 
                    href="https://mastermind.ac/curso/historia-de-la-tarjeta-grafica" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-500 hover:text-red-600 text-sm"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Ver curso
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-100 hover:border-red-500 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 border-2 border-red-500 rounded-full mx-auto mb-4">
                  <Gamepad2 className="text-red-500" size={32} />
                </div>
                <h3 className="text-black text-lg font-semibold mb-2">Modding en Minecraft</h3>
                <p className="text-gray-600 text-sm mb-4">Mastermind</p>
                <p className="text-gray-500 text-xs mb-4">2025</p>
                <Badge className="bg-purple-500 text-white mb-4">En progreso</Badge>
                <div>
                  <a 
                    href="https://mastermind.ac/curso/modding-minecraft" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-500 hover:text-red-600 text-sm"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Ver curso
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4" data-macaly="projects-title">
              Proyectos
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Stratum */}
            <Card className="bg-white border-2 border-gray-100">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Gamepad2 className="text-red-500 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-red-500">Stratum</h3>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">Proyecto desarrollado por Against Software</p>
                
                <div className="text-gray-700 text-sm mb-6">
                  Fui uno de los artistas 3D del proyecto Stratum, contribuyendo al desarrollo visual y modelado de assets para este videojuego completo desarrollado por Against Software.
                </div>
                
                <div className="flex flex-col gap-2">
                  <a 
                    href="https://againstsoftware.itch.io/stratum" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-500 hover:text-red-600 text-sm"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Ver en Itch.io
                  </a>
                  <a 
                    href="https://linktr.ee/againstsoftware" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-500 hover:text-red-600 text-sm"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    LinkTree
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Programming Projects */}
            <Card className="bg-white border-2 border-gray-100">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Github className="text-red-500 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-red-500">Trabajos de Programación</h3>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">Repositorio de proyectos de código</p>
                
                <div className="text-gray-700 text-sm mb-6">
                  Aquí puedes encontrar mis trabajos de programación, desde proyectos universitarios hasta desarrollos personales en diferentes lenguajes y tecnologías.
                </div>
                
                <a 
                  href="https://github.com/JavierCastroMagro03" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-500 hover:text-red-600 text-sm"
                >
                  <Github size={16} className="mr-2" />
                  Ver en GitHub
                </a>
              </CardContent>
            </Card>

            {/* Art Portfolio */}
            <Card className="bg-white border-2 border-gray-100">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Palette className="text-red-500 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-red-500">Portfolio Artístico</h3>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">Mis mejores piezas de arte digital</p>
                
                <div className="text-gray-700 text-sm mb-6">
                  En ArtStation están colgadas las que considero mis mejores piezas de arte digital, incluyendo modelado 3D, texturizado y composición visual.
                </div>
                
                <a 
                  href="https://silver999.artstation.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-500 hover:text-red-600 text-sm"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Ver en ArtStation
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4" data-macaly="contact-title">
              Contacto
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto"></div>
          </div>
          
          <div className="text-center mb-12">
            <p className="text-xl text-black" data-macaly="contact-subtitle">
              ¿Preparado para colaborar en algún proyecto? ¡Hablemos y hagamos algo increíble juntos!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-white border-2 border-gray-100">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-red-500 mb-1">Email</h4>
                      <p className="text-gray-700">javiercastromagro@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-gray-100">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-red-500 mb-1">Teléfono</h4>
                      <p className="text-gray-700">+34 686675656</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-gray-100">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-red-500 mb-1">Localización</h4>
                      <p className="text-gray-700">Madrid, España</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Links */}
            <Card className="bg-white border-2 border-gray-100">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="text-red-500 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-red-500">Sígueme</h3>
                </div>
                
                <div className="space-y-4">
                  <a 
                    href="https://x.com/JSILVER_999" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-red-500 transition-colors"
                  >
                    <Twitter size={20} className="mr-4" />
                    <span>@JSILVER_999</span>
                  </a>
                  
                  <a 
                    href="https://github.com/JavierCastroMagro03" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-red-500 transition-colors"
                  >
                    <Github size={20} className="mr-4" />
                    <span>GitHub</span>
                  </a>
                  
                  <a 
                    href="https://silver999.artstation.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-red-500 transition-colors"
                  >
                    <Palette size={20} className="mr-4" />
                    <span>ArtStation</span>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/javier-castro-b4a472375/?trk=opento_sprofile_details" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-red-500 transition-colors"
                  >
                    <Linkedin size={20} className="mr-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-16">
            <p className="text-gray-600 text-sm" data-macaly="footer-text">
              © 2025 Javier Castro Magro.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}