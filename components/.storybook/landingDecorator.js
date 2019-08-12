import * as React from "react"
import styled from "styled-components";
import OrbitLanding from "../src/OrbitLanding";


const LandingDecorator = storyFn => <OrbitLanding>{storyFn()}</OrbitLanding>;


export default LandingDecorator;
