"use client"

import React, { useEffect } from "react"
import { Moon,Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export const ModdleToggle = ()=>{
    const {theme,setTheme} = useTheme();
    const [mounted,setMounted] = React.useState(false);

    useEffect(()=>{
        setMounted(true)
    },[])

    if(!mounted){
        return null
    }

    return (
        <Button
        variant="ouline"
        size="icon"
        onClick={()=>setTheme(theme==="dark"?"light":"dark")}> 
            {theme === "dark"?<Sun className="h-5 w-5" />:<Moon className="h-5 w-5" />}
        </Button>
    )
}