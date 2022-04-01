import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import { dimensions } from '../../globals/styleGuide'
import { useSpring, animated } from 'react-spring'

const primaryHeaderHeight = dimensions.PRIMARY_HEADER_HEIGHT
const secondaryHeaderHeight = dimensions.SECONDARY_HEADER_HEIGHT


const NavBar = (props) => {
    const {
        isPrimary,
        logo
    } = props
    const [headerHeight, setHeaderHeight] = useState(primaryHeaderHeight)

    useEffect(() => {
        if(isPrimary){
            setHeaderHeight(primaryHeaderHeight)
        }else{
            setHeaderHeight(secondaryHeaderHeight)
        }
        
    }, [isPrimary])
    const {
    } = props

    const containerStyles = useSpring({ 
        backgroundColor: isPrimary ? 'rgba(255,255,255, .0)' : 'white',
        height: isPrimary ? `${dimensions.PRIMARY_HEADER_HEIGHT}px` : `${dimensions.SECONDARY_HEADER_HEIGHT}px`
    })

    const textStyles = useSpring({ 
        color: isPrimary ? 'rgba(255,255,255, .8)' : 'rgba(0,0,0, .8)',
    })

  

    
    return(
       <Container style={containerStyles}>
           <LogoAnchor>
               <LogoContainer>
                    <LogoImageContainer>
                        <Image width={60} height={60} src={logo}/>
                    </LogoImageContainer>
                    <LogoText style={textStyles}>O S M I U M</LogoText>
               </LogoContainer>
           </LogoAnchor>
       </Container>
    )
}

const Container = styled(animated.div)`
    width: 100%;
    position: fixed;
    top: 0;
`
const LogoAnchor = styled.div`
    height: 100%;
    margin:auto;
    display: flex;
    justify-content: center;
    align-items: center;
`
const LogoContainer = styled.div`
    display: flex;
`
const LogoImageContainer = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const LogoText = styled(animated.div)`
    height: 80px;
    display: flex;
    align-items: center;
    margin: 0;
    font-size: 40px;
    font-weight: bold;
`

export default NavBar