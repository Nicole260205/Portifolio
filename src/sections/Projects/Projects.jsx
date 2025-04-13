import styles from './ProjectsStyles.module.css'
import weather from '../../assets/Bright.svg'
import ProjectCard from '../../common/ProjectCard';
import karma from '../../assets/Karma.png'
import pokedex from '../../assets/pokebola.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projetos</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={weather}
          link="https://github.com/Nicole260205/AppDeClimaEmReact"
          h3="Clima"
          p="App de Clima"
        />
        <ProjectCard
          src={karma}
          link="https://github.com/Nicole260205/TaylorSwiftSetlist"
          h3="The Eras Tour"
          p="Set List"
        />
        <ProjectCard
          src={pokedex}
          link="https://github.com/Nicole260205/Projetos_Front/tree/main/pokedex"
          h3="Pokedex"
          p="Lista de Pokemons"
        />
      </div>
    </section>
  ); 
}

export default Projects
