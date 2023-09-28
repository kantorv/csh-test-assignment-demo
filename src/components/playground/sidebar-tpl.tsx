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

export const metadata = {
  title: "Playground",
  description: "The OpenAI Playground built using the components.",
}

export default function PlaygroundPage() {
  return (
    <div
      // style={{
      //   maxWidth:"100%",
      //   border: "1px solid",
      //   borderRadius:"5px"
      // }}
      className="container"
    >
      <div className="hidden h-full flex-col md:flex">
        <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
          <h2 className="text-lg font-semibold">Playground</h2>
          <div className="ml-auto flex w-full space-x-2 sm:justify-end">
            <PresetSelector presets={presets} />
            <PresetSave />
            <div className="hidden space-x-2 md:flex">
              <CodeViewer />
              <PresetShare />
            </div>
            <PresetActions />
          </div>
        </div>
        <Separator />
  
          <div className="container h-full py-6">
            <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
              <div className="hidden flex-col space-y-4 sm:flex md:order-2">
                <ModelSelector types={types} models={models} />
    
                <TopPSelector defaultValue={[0.9]} />
              </div>
              <div className="md:order-1">
              <div className="flex flex-col space-y-4">
                    <div className="grid h-full w-full lg:grid-cols-1">
                      <div className="rounded-md border bg-muted lg:min-h-[700px]" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button>Submit</Button>
                      <Button variant="secondary">
                        <span className="sr-only">Show history</span>
                        <CounterClockwiseClockIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
  
      </div>
    </div>
  )
}
