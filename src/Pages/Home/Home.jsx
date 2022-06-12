import React from 'react'

function Home() {
    return (
        <SkeletonTheme
            baseColor="#5294e0"
            highlightColor="#96c7ff"
            borderRadius="0.5rem"
            duration={4}>
            < div className="App" >
                <Navbar />
                <hr />
                <div className='container'>
                    <InputComponent id={id} type='text' name="Search" onchange={handleChangeInput} />
                </div>
                <div className={'container'}>
                    {searchTerm.length === 0 ?
                        data.map((channel) => <ChannelCard loading={loading} img={channel.avatar} title={channel.title} key={channel.id} description={channel.description} />)
                        : filteredData.map((channel) => <ChannelCard loading={loading} img={channel.avatar} title={channel.title} key={channel.id} description={channel.description} />)}
                </div>
            </div ></SkeletonTheme>
    )
}

export default Home