// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'aguadoSoluciones',
			customCss: [
        		'./src/styles/global.css',
      		],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Introducción',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introducción', slug: 'introduccion/introduccion' },
					],
				},
				{
					label: 'Funcionalidades y tecnologías',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Funcionalidades y tecnologías', slug: 'funcionalidadesytecnologias/funcionalidadesytecnologias' },
					],
				},
				{
					label: 'Diagramas y diseño',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Diagrama de casos de uso', slug: 'diagramasydiseño/casosdeuso' },
						{ label: 'Diagrama de clases', slug: 'diagramasydiseño/clases' },
						{ label: 'Diagrama Entidad-Relación', slug: 'diagramasydiseño/entidadrelacion' },
						{ label: 'Diagrama de componentes', slug: 'diagramasydiseño/componentes' },
						{ label: 'Diagrama de actividad', slug: 'diagramasydiseño/actividad' },
						{ label: 'Diagrama de secuencia', slug: 'diagramasydiseño/secuencia' },
						{ label: 'Diagrama de despliegue', slug: 'diagramasydiseño/despliegue' },
						{ label: 'Casos de prueba', slug: 'diagramasydiseño/casosdeprueba' },
						{ label: 'Figma', slug: 'diagramasydiseño/figma' },
					],
				},
				{
					label: 'Uso e instalación',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Guía de uso', slug: 'usoeinstalacion/guiadeuso' },
						{ label: 'Guía de instalación', slug: 'usoeinstalacion/guiadeinstalacion' },
					],
				},
				{
					label: 'Contacto',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Contacto', slug: 'contacto/contacto' },
					],
				},
			],
		}),
	],
});
