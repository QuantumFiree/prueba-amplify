import { Link } from "react-router-dom";
import "./Home.css";
import { useAuthenticator } from "@aws-amplify/ui-react";

function Home() {
  const { signOut } = useAuthenticator();

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
    <div className="home-wrapper">

      <header className="home-header">
        <div className="home-badge">AWS Cloud Services</div>
        <h1 className="home-title">AWS Amplify</h1>
        <p className="home-subtitle">
          Plataforma completa para desarrollar y desplegar aplicaciones web y móviles full-stack en la nube
        </p>
      </header>

      <section className="home-section">
        <div className="home-section-inner">
          <div className="home-card">
            <h2 className="home-card-title">¿Qué es AWS Amplify?</h2>
            <p className="home-card-text">
              AWS Amplify es un conjunto de herramientas y servicios que permite a los desarrolladores frontend 
              crear aplicaciones full-stack escalables con tecnologías web y móviles. Ofrece una experiencia 
              simplificada para configurar backends, conectar aplicaciones y desplegar en producción.
            </p>
            <p className="home-card-text">
              Incluye servicios como autenticación, APIs GraphQL/REST, almacenamiento de archivos, 
              bases de datos, hosting con CDN global, y mucho más, todo integrado en un solo ecosistema.
            </p>
          </div>
        </div>
      </section>

      <section className="home-section-wide">
        <div className="home-section-wide-inner">
          <h2 className="home-section-heading">Características Principales</h2>
          <div className="home-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="home-feature-card">
                <div className="home-feature-icon">{feature.icon}</div>
                <h3 className="home-feature-title">{feature.title}</h3>
                <p className="home-feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-inner">
          <div className="home-advantages-card">
            <h2 className="home-card-title">Ventajas de AWS Amplify</h2>
            <div className="home-advantages-grid">
              <div className="home-advantage-item">
                <span className="home-advantage-icon">✅</span>
                <div>
                  <h3 className="home-advantage-title">Desarrollo Acelerado</h3>
                  <p className="home-advantage-desc">Reduce el tiempo de desarrollo con componentes pre-construidos</p>
                </div>
              </div>
              <div className="home-advantage-item">
                <span className="home-advantage-icon">✅</span>
                <div>
                  <h3 className="home-advantage-title">Escalabilidad Automática</h3>
                  <p className="home-advantage-desc">Escala automáticamente según la demanda de tu aplicación</p>
                </div>
              </div>
              <div className="home-advantage-item">
                <span className="home-advantage-icon">✅</span>
                <div>
                  <h3 className="home-advantage-title">Integración con AWS</h3>
                  <p className="home-advantage-desc">Acceso completo a más de 200 servicios de AWS</p>
                </div>
              </div>
              <div className="home-advantage-item">
                <span className="home-advantage-icon">✅</span>
                <div>
                  <h3 className="home-advantage-title">CI/CD Integrado</h3>
                  <p className="home-advantage-desc">Pipeline de despliegue automático desde Git</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section-wide">
        <div className="home-section-wide-inner">
          <h2 className="home-section-heading">Casos de Uso</h2>
          <div className="home-cases-grid">
            <div className="home-case-card">
              <div className="home-case-icon">🛍️</div>
              <h3 className="home-case-title">E-Commerce</h3>
              <p className="home-case-desc">
                Crea tiendas online completas con carrito de compras, procesamiento de pagos, 
                gestión de inventario y autenticación de usuarios. Todo con escalabilidad automática 
                para manejar picos de tráfico durante ventas especiales.
              </p>
            </div>
            <div className="home-case-card">
              <div className="home-case-icon">📱</div>
              <h3 className="home-case-title">Apps Móviles</h3>
              <p className="home-case-desc">
                Desarrolla aplicaciones móviles nativas para iOS y Android con backend compartido. 
                Incluye notificaciones push, sincronización offline, y almacenamiento en la nube 
                para archivos multimedia.
              </p>
            </div>
            <div className="home-case-card">
              <div className="home-case-icon">📊</div>
              <h3 className="home-case-title">Dashboards</h3>
              <p className="home-case-desc">
                Construye paneles de control en tiempo real con visualización de datos, 
                análisis avanzados y reportes personalizados. Conecta múltiples fuentes de datos 
                y actualiza la información automáticamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-inner">
          <div className="home-card">
            <h2 className="home-card-title">¿Por qué elegir AWS Amplify?</h2>
            <div className="space-y-6">
              <p className="home-why-text">
                <strong className="home-why-strong">Productividad sin precedentes:</strong> AWS Amplify elimina la complejidad 
                de configurar y mantener infraestructura backend. Los desarrolladores pueden enfocarse en crear 
                experiencias de usuario excepcionales mientras Amplify maneja automáticamente el escalado, 
                la seguridad y el rendimiento.
              </p>
              <p className="home-why-text">
                <strong className="home-why-strong">Ecosistema completo:</strong> Desde la autenticación de usuarios hasta 
                el almacenamiento de archivos, desde APIs GraphQL hasta funciones serverless, Amplify proporciona 
                todas las herramientas necesarias para construir aplicaciones modernas y robustas.
              </p>
              <p className="home-why-text">
                <strong className="home-why-strong">Despliegue continuo:</strong> Conecta tu repositorio de GitHub, GitLab 
                o Bitbucket y obtén despliegues automáticos con cada commit. Los previews de pull requests permiten 
                revisar cambios antes de llevarlos a producción, mejorando la calidad del código.
              </p>
              <p className="home-why-text">
                <strong className="home-why-strong">Costos optimizados:</strong> Paga solo por lo que usas. La arquitectura 
                serverless de Amplify significa que no hay servidores inactivos consumiendo recursos. Escala desde 
                cero usuarios hasta millones sin cambios en la configuración.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-inner">
          <h2 className="home-section-heading">Equipo de Desarrollo</h2>
          <div className="home-team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="home-team-card">
                <div className="home-team-avatar">{member.avatar}</div>
                <h3 className="home-team-name">{member.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="home-cta">
        <Link to="/todos" className="home-cta-link">
          Ver Todos →
        </Link>
        <Link to="/carga-archivos" className="home-cta-link">
          📁 Carga de Archivos →
        </Link>
        <button onClick={signOut} className="home-cta-link home-signout-btn">
          🔓 Cerrar Sesión
        </button>
      </div>

      <footer className="home-footer">
        <p className="home-footer-text">Proyecto de demostración y configuracion - AWS Amplify 2026</p>
      </footer>

    </div>
  );
}

export default Home;