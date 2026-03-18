# 🐘 PHP DESDE CERO - GUÍA COMPLETA

**PHP desde Cero** es un sitio educativo completo diseñado para enseñar PHP desde los fundamentos hasta conceptos avanzados, con explicaciones claras, ejemplos prácticos y código listo para usar.

> *"PHP powers 77% of all websites whose server-side programming language we know."*

---

## 🎯 ¿Qué es este Proyecto?

Este proyecto proporciona un recurso educativo gratuito para aprender PHP, incluyendo:

- **Documentación completa** de cada tema
- **Ejemplos de código** listos para ejecutar
- **Ejercicios prácticos** para reforzar el aprendizaje
- **Sitio web educativo** con navegación intuitiva

---

## 📚 Contenido del Curso

### Módulo 1: Fundamentos

1. **Introducción**
   - Historia de PHP
   - ¿Qué es PHP y para qué sirve?
   - PHP en la web moderna

2. **Instalación**
   - XAMPP / WAMP / LAMP
   - PHP standalone
   - Composer y gestión de paquetes
   - Configuración del entorno

3. **Conceptos básicos**
   - Sintaxis básica
   - Variables y tipos de datos
   - Operadores
   - Estructuras de control

### Módulo 2: Intermedio

4. **Ejemplos prácticos**
   - Funciones y scope
   - Arrays y funciones de array
   - Manejo de formularios
   - Sesiones y cookies

5. **Buenas prácticas**
   - PSR standards
   - Manejo de errores
   - Seguridad web
   - PDO y bases de datos

### Módulo 3: Avanzado

6. **Casos reales**
   - Programación orientada a objetos
   - MVC pattern
   - APIs REST
   - Laravel / Symfony

7. **Proyecto final**
   - Aplicación web completa
   - Autenticación y autorización
   - Deploy a producción

---

## 🗂️ Estructura del Proyecto

```
FrecuenciaLetras/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos del sitio
├── js/
│   └── main.js         # JavaScript del sitio
└── README.md
```

---

## 🚀 Cómo Usar este Proyecto

### Opción 1: Navegar el Sitio Web

1. Abre `index.html` en tu navegador
2. Navega por las secciones del curso
3. Haz clic en los temas para ver la documentación detallada

### Opción 2: Ejecutar los Ejemplos

1. Instala XAMPP o PHP standalone
2. Coloca archivos en htdocs o usa `php -S`
3. Abre en navegador o terminal

### Requisitos

- **PHP 8.0** o superior
- Servidor web (Apache/Nginx)
- Composer para dependencias

---

## 📝 Ejemplos Rápidos

### Variables y Tipos

```php
<?php
$nombre = "Juan";
$edad = 30;
$altura = 1.75;
$esEstudiante = true;
$hobbies = ["leer", "codificar"];
$persona = ["nombre" => $nombre, "edad" => $edad];
?>
```

### Funciones

```php
<?php
function saludar($nombre) {
    return "Hola $nombre";
}

function sumar($a, $b = 0) {
    return $a + $b;
}

// Arrow functions (PHP 7.4+)
$cuadrado = fn($x) => $x ** 2;
?>
```

### Clases

```php
<?php
class Persona {
    public function __construct(
        private string $nombre
    ) {}

    public function saludar(): string {
        return "Hola, soy {$this->nombre}";
    }
}

$juan = new Persona("Juan");
echo $juan->saludar();
?>
```

### Manejo de Formularios

```php
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    
    echo "Hola $nombre";
}
?>

<form method="POST">
    <input type="text" name="nombre" required>
    <input type="email" name="email" required>
    <button type="submit">Enviar</button>
</form>
```

### PDO y Base de Datos

```php
<?php
$dsn = 'mysql:host=localhost;dbname=mibd';
$usuario = 'root';
$password = '';

try {
    $pdo = new PDO($dsn, $usuario, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $stmt = $pdo->prepare("SELECT * FROM usuarios WHERE id = :id");
    $stmt->execute(['id' => 1]);
    $usuario = $stmt->fetch(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>
```

---

## 🎓 Metodología de Aprendizaje

### 1. Leer la Teoría
Cada tema comienza con una explicación clara del concepto.

### 2. Ver Ejemplos
Los ejemplos de código muestran la aplicación práctica.

### 3. Practicar
Los ejercicios te permiten aplicar lo aprendido.

### 4. Experimentar
Modifica los ejemplos para entender cómo funcionan.

---

## 🔧 Comandos Esenciales

### Terminal/Consola

```bash
# Ver versión de PHP
php --version

# Servidor de desarrollo
php -S localhost:8000

# Ejecutar script
php archivo.php

# Instalar paquete con Composer
composer install

# Crear nuevo proyecto
composer create-project laravel/laravel mi-app
```

---

## 📖 Recursos Adicionales

### Documentación Oficial

- [PHP Documentation](https://www.php.net/manual/es/)
- [Composer Documentation](https://getcomposer.org/doc/)
- [PHP The Right Way](https://phptherightway.com/)

### Herramientas Recomendadas

- **XAMPP** - Stack completo para desarrollo
- **Composer** - Gestor de dependencias
- **PHPUnit** - Testing framework
- **PHPStan** - Análisis estático

### Comunidades

- [PHP Community](https://www.php.net/community/)
- [Stack Overflow - PHP](https://stackoverflow.com/questions/tagged/php)
- [Reddit r/PHP](https://www.reddit.com/r/PHP/)

---

## 💡 Consejos para Principiantes

1. **Usa PHP 8+**: Aprovecha las últimas características.
2. **Siempre usa PDO**: mysqli es obsoleto para nuevos proyectos.
3. **Valida datos de entrada**: Nunca confíes en el usuario.
4. **Usa Composer**: Gestiona dependencias profesionalmente.
5. **Sigue PSR-12**: Mantén código consistente.

---

## ⚠️ Mejores Prácticas

### Seguridad

- Usa `password_hash()` para contraseñas
- Escapa output con `htmlspecialchars()`
- Usa prepared statements para SQL

### Código Limpio

- Sigue PSR-12 para estilo
- Usa type hints y return types
- Mantén funciones pequeñas

### Rendimiento

- Usa OPcache en producción
- Evita consultas N+1
- Implementa caching cuando sea posible

---

## 🧪 Ejercicios Prácticos

### Nivel Básico

1. Calculadora simple con formularios
2. Sistema de login básico
3. CRUD de usuarios simple

### Nivel Intermedio

1. API REST con autenticación
2. Sistema de archivos subidos
3. Carrito de compras con sesiones

### Nivel Avanzado

1. Aplicación MVC completa
2. Sistema de autenticación con JWT
3. Microservicios con Laravel/Symfony

---

## 👨‍💻 Desarrollado por Isaac Esteban Haro Torres

**Ingeniero en Sistemas · Full Stack · Automatización · Data**

- 📧 Email: zackharo1@gmail.com
- 📱 WhatsApp: 098805517
- 💻 GitHub: https://github.com/ieharo1
- 🌐 Portafolio: https://ieharo1.github.io/portafolio-isaac.haro/

---

© 2026 Isaac Esteban Haro Torres - Todos los derechos reservados.
