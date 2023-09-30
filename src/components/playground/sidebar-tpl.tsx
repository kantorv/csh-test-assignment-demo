import { useEffect, useInsertionEffect } from "react"

import { CounterClockwiseClockIcon } from "@radix-ui/react-icons"

import { Button } from "../../registry/new-york/ui/button"

import { Separator } from "../../registry/new-york/ui/separator"


import { CodeViewer } from "./components/code-viewer"

import { ModelSelector } from "./components/model-selector"
import { PresetActions } from "./components/preset-actions"
import { PresetSave } from "./components/preset-save"
import { PresetSelector } from "./components/preset-selector"
import { PresetShare } from "./components/preset-share"

import { TopPSelector } from "./components/top-p-selector"
import { models, types } from "./data/models"
import { presets } from "./data/presets"

import  { csh_lib_client }  from 'csh-assignment-lib'
import { from } from 'rxjs';

//import { useToast } from "../../registry/new-york/ui/use-toast"


export const metadata = {
  title: "Playground",
  description: "The OpenAI Playground built using the components.",
}



const serviceEventsListener = ()=>{


}

export default function PlaygroundPage() {
 
 // const { toast } = useToast()

// service subscribtion:
// https://xstate.js.org/docs/recipes/rxjs.html

  // useEffect(()=>{
  //   console.log("[PlaygroundPage] started" , csh_lib_client.id, document.getElementById(csh_lib_client.vp.containerId))
  //   const state$ = from(csh_lib_client.service);

  //   const subscribtion = state$.subscribe((state) => {
  //     console.log("[PlaygroundPage] subscribtion event", state.event, state.value)
  //   });

  //   return ()=>subscribtion.unsubscribe()
  // },[])


  useEffect(()=>{
    console.log("[PlaygroundPage] started" , csh_lib_client.id, document.getElementById(csh_lib_client.vp.containerId))
    const state$ = from(csh_lib_client.service);

    const subscribtion = state$.subscribe((state) => {
      console.log("[PlaygroundPage] subscribtion event", state.event, state.value)
    });

    return ()=>subscribtion.unsubscribe()
  },[])

  //console.log("[PlaygroundPage] started" , csh_lib_client.id, document.getElementById(csh_lib_client.vp.containerId))


  const handleSubmitClick = ()=>{
    console.log("[PlaygroundPage] handleSubmitClick clicked")

  }
  return (
    <div
      // style={{
      //   maxWidth:"100%",
      //   border: "1px solid",
      //   borderRadius:"5px"
      // }}
      className="container"
    >
      <div className="h-full flex-col flex">
        <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
          <h2 className="text-lg font-semibold">Playground</h2>
          <div className="ml-auto flex w-full space-x-2 sm:justify-end">
            {/* <PresetSelector presets={presets} />
            <PresetSave /> */}
            {/* <div className="hidden space-x-2 md:flex">
              <CodeViewer />
              <PresetShare />
            </div> */}
            <PresetActions />
          </div>
        </div>
        <Separator />
  
          <div className="container h-full py-2">
            <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
              <div className="hidden flex-col space-y-4 sm:flex md:order-2">
                <ModelSelector types={types} models={models} />
    
                <TopPSelector defaultValue={[0.9]} />

                <div className="grow" style={{
                 // background: "yellow"
                }}></div>

                <div className="flex items-center space-x-2">
                      <Button
                        onClick={handleSubmitClick} 
                      >Submit</Button>
                      <Button variant="secondary">
                        <span className="sr-only">Show history</span>
                        <CounterClockwiseClockIcon className="h-4 w-4" />
                      </Button>

                      
                    </div>
                    <div>
                    <Button
                        onClick={() => {
                   
                        }}
                      >
                        Show Toast
                      </Button>
                    </div>

              </div>
              <div className="md:order-1">
              <div className="flex flex-col space-y-4">
                    <div className="grid h-full w-full grid-cols-1">
                      <div className="rounded-md border bg-muted   aspect-video  h-full w-full" id="csh-app-root" />
                    </div>

                  </div>
              </div>
            </div>
          </div>
  
      </div>
    </div>
  )
}
