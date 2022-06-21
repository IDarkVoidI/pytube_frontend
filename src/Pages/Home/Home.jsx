import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'


function Home() {
    return (
        <div className='container'>
            <Navbar />
            <hr />
            <div>
                <h1 className='h-1'>Typography</h1>
                <h2 className='h-2'>Typography</h2>
                <h3 className='h-3'>Typography</h3>
                <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ex et accusantium minus maiores cupiditate iste consequatur reiciendis illo vitae delectus distinctio iure fugiat pariatur minima ad excepturi enim necessitatibus porro? Voluptatibus iusto recusandae doloremque earum incidunt, cum excepturi deserunt quisquam non necessitatibus, nulla impedit similique dicta, quidem unde quasi quia vel? A sequi, quia minus hic ad sit voluptatibus officia quam est quaerat non vero esse, aut, nam odit vitae saepe facere molestias obcaecati similique expedita veniam. Officia quis obcaecati hic cum id, sapiente eum. Laudantium fugiat at, voluptas, expedita, quos qui eligendi corporis quis dolorem molestiae dignissimos eos.</p>
                <small className='small-text'>Typography</small>
                <br />
                <a className='link' href='/'>Typography</a>
            </div>
        </div>
    )
}

export default Home