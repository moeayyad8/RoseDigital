
import AppHeader from "../components/AppHeader";
import React from "react";
import theme from "../node_modules/@material-tailwind/react/theme/index";
import css from "styled-jsx/css";
import '../styles/globals.css'
import Order from '../components/XOrder'
import Briefs from '../components/XBriefs'

import Campaigns from '../components/XCampaigns'
import Message from "../components/notinusern/Message"

import Link from "next/link"
import Footer from "../components/Footer";
import { getSession, useSession} from "next-auth/react"

function MyApp({Component, pageProps}) {

  return (
    <div>
    <AppHeader/>
    <Component {...pageProps}/> {""}
   <Footer/>
    </div>
  );
}

export default MyApp