"use client"
import { Button, Icon } from "@spek/ui"
import { useRouter } from "next/navigation"

import { CenterLoader } from "@/components/CenterLoader"
import { useGetConfByQueryParam } from "@/components/room/useGetRoomByQueryParam"
import { useCurrentConfIdStore } from "@/stores/useCurentConfIdStore"
import { useMuteStore } from "@/stores/useMuteStore"
import { RoomUsersPanel } from "@/components/room/RoomUsersPanel"
import { useLeaveConf } from "@/hooks/useLeaveConf"
import { useCurrentConfInfo } from "@/hooks/useCurrentConfInfo"
import { useSetMute } from "@/hooks/useSetMute"
import { useDeafStore } from "@/stores/useDeafStore"
import { useSetDeafen } from "@/hooks/useSetDeafen"
import { RoomUserPreviewModal } from "@/components/room/RoomUserPreviewModal"
import { RoomHeader } from "@/components/room/RoomHeader"

interface Props {
  id: string
}

export const ConfController: React.FC<Props> = ({ id }) => {
  const { isLoading, data } = useGetConfByQueryParam(id)
  const { currentConfId } = useCurrentConfIdStore()
  const { isLoading: leaveLoading, leaveConf } = useLeaveConf()
  const { canSpeak } = useCurrentConfInfo()
  const { muted } = useMuteStore()
  const { deafened } = useDeafStore()
  const { push } = useRouter()
  const setMute = useSetMute()
  const setDeafen = useSetDeafen()

  if (isLoading || !currentConfId) {
    return <CenterLoader />
  }

  if (!data || "error" in data) {
    return null
  }

  const roomCreator = data.users.find((u) => u.id === data.conf.creator_id)

  return (
    <div className="flex flex-col h-screen overflow-y-hidden">
      <RoomHeader
        description={data.conf.description}
        name={data.conf.name}
        roomCreator={roomCreator}
        numPeopleInside={data.conf.num_people_inside}
      />
      <RoomUserPreviewModal {...data} />
      <RoomUsersPanel {...data} />
      <div className="sticky bottom-0 mb-5 bg-primary-900 p-2 rounded-b-md">
        <div className="flex gap-3">
          <div
            className="flex justify-center items-center h-10 w-10 rounded-md cursor-pointer bg-primary-900"
            onClick={() => {
              if (canSpeak) {
                setMute(!muted)
              }
            }}
          >
            {muted ? <Icon name="mic-off" /> : <Icon name="mic" />}
          </div>
          <div
            className="flex justify-center items-center h-10 w-10 rounded-md cursor-pointer bg-primary-900"
            onClick={() => setDeafen(!deafened)}
          >
            {deafened ? <Icon name="volume-x" /> : <Icon name="volume-2" />}
          </div>
          <div className="justify-center items-center">
            <Button
              loading={leaveLoading}
              onClick={() => {
                push("/home")
                leaveConf()
              }}
            >
              Leave Room
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
