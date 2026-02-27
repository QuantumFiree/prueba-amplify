import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NuevaPagina from "./NuevaPagina";

function Home() {
  const teamMembers = [
    {
      name: "Ivan",
      avatar: "👨‍💻"
    },
    {
      name: "Felipe",
      avatar: "👨‍💼"
    }
  ]

  const features = [
    {
      icon: "🚀",
      title: "Despliegue Rápido",
      description: "Despliega aplicaciones web en minutos con integración continua automática"
    },
    {
      icon: "🔐",
      title: "Autenticación",
      description: "Sistema de autenticación completo con soporte para múltiples proveedores"
    },
    {
      icon: "💾",
      title: "Base de Datos",
      description: "GraphQL API y almacenamiento de datos con DynamoDB integrado"
    },
    {
      icon: "📱",
      title: "Hosting Global",
      description: "CDN global con SSL automático y dominio personalizado"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 w-full">
      
      <nav className="flex justify-end px-8 pt-6">
        <Link
          to="/todos"
          className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition"
        >
          Ir a Todos →
        </Link>
      </nav>

      <header className="text-center py-20 px-4">
        <div className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
          AWS Cloud Services
        </div>
        <h1 className="text-7xl font-bold text-white mb-6">
          AWS Amplify
        </h1>
        <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
          Plataforma completa para desarrollar y desplegar aplicaciones web y móviles full-stack en la nube
        </p>
      </header>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">¿Qué es AWS Amplify?</h2>
            <p className="text-gray-200 text-xl leading-relaxed mb-6 text-center">
              AWS Amplify es un conjunto de herramientas y servicios que permite a los desarrolladores frontend 
              crear aplicaciones full-stack escalables con tecnologías web y móviles. Ofrece una experiencia 
              simplificada para configurar backends, conectar aplicaciones y desplegar en producción.
            </p>
            <p className="text-gray-200 text-xl leading-relaxed text-center">
              Incluye servicios como autenticación, APIs GraphQL/REST, almacenamiento de archivos, 
              bases de datos, hosting con CDN global, y mucho más, todo integrado en un solo ecosistema.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Características Principales</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="text-6xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-white text-center mb-10">Ventajas de AWS Amplify</h2>
            <div className="grid md:grid-cols-2 gap-8 text-white">
              <div className="flex items-start space-x-4">
                <span className="text-3xl">✅</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Desarrollo Acelerado</h3>
                  <p className="text-white/90 text-lg">Reduce el tiempo de desarrollo con componentes pre-construidos</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-3xl">✅</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Escalabilidad Automática</h3>
                  <p className="text-white/90 text-lg">Escala automáticamente según la demanda de tu aplicación</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-3xl">✅</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Integración con AWS</h3>
                  <p className="text-white/90 text-lg">Acceso completo a más de 200 servicios de AWS</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-3xl">✅</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">CI/CD Integrado</h3>
                  <p className="text-white/90 text-lg">Pipeline de despliegue automático desde Git</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Casos de Uso</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-5xl mb-4 text-center">🛍️</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">E-Commerce</h3>
              <p className="text-gray-300 text-lg">
                Crea tiendas online completas con carrito de compras, procesamiento de pagos, 
                gestión de inventario y autenticación de usuarios. Todo con escalabilidad automática 
                para manejar picos de tráfico durante ventas especiales.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-5xl mb-4 text-center">📱</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Apps Móviles</h3>
              <p className="text-gray-300 text-lg">
                Desarrolla aplicaciones móviles nativas para iOS y Android con backend compartido. 
                Incluye notificaciones push, sincronización offline, y almacenamiento en la nube 
                para archivos multimedia.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-5xl mb-4 text-center">📊</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Dashboards</h3>
              <p className="text-gray-300 text-lg">
                Construye paneles de control en tiempo real con visualización de datos, 
                análisis avanzados y reportes personalizados. Conecta múltiples fuentes de datos 
                y actualiza la información automáticamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">¿Por qué elegir AWS Amplify?</h2>
            <div className="space-y-6 text-gray-200 text-lg">
              <p className="leading-relaxed">
                <strong className="text-white">Productividad sin precedentes:</strong> AWS Amplify elimina la complejidad 
                de configurar y mantener infraestructura backend. Los desarrolladores pueden enfocarse en crear 
                experiencias de usuario excepcionales mientras Amplify maneja automáticamente el escalado, 
                la seguridad y el rendimiento.
              </p>
              <p className="leading-relaxed">
                <strong className="text-white">Ecosistema completo:</strong> Desde la autenticación de usuarios hasta 
                el almacenamiento de archivos, desde APIs GraphQL hasta funciones serverless, Amplify proporciona 
                todas las herramientas necesarias para construir aplicaciones modernas y robustas.
              </p>
              <p className="leading-relaxed">
                <strong className="text-white">Despliegue continuo:</strong> Conecta tu repositorio de GitHub, GitLab 
                o Bitbucket y obtén despliegues automáticos con cada commit. Los previews de pull requests permiten 
                revisar cambios antes de llevarlos a producción, mejorando la calidad del código.
              </p>
              <p className="leading-relaxed">
                <strong className="text-white">Costos optimizados:</strong> Paga solo por lo que usas. La arquitectura 
                serverless de Amplify significa que no hay servidores inactivos consumiendo recursos. Escala desde 
                cero usuarios hasta millones sin cambios en la configuración.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Equipo de Desarrollo</h2>
          <div className="flex justify-center gap-12 flex-wrap">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center min-w-[280px]"
              >
                <div className="text-8xl mb-6">{member.avatar}</div>
                <h3 className="text-3xl font-bold text-white">{member.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-gray-400">
        <p className="text-lg">Proyecto de demostración y configuracion - AWS Amplify 2026</p>
      </footer>

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<NuevaPagina />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
