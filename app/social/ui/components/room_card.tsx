import React from 'react'
import { Card } from '#common/ui/components/card'
import Room from '#social/models/room'
import { Link } from '@inertiajs/react'
import { Users2Icon } from 'lucide-react'
import useTranslate from '#common/ui/hooks/use_translate'
import { Avatar, AvatarImage } from '#common/ui/components/avatar'
import { useFormatDistanceToNow } from '#common/ui/hooks/use_format_distance_to_now'

interface RoomCardProps {
  room: Room
}

export function RoomCard({ room }: RoomCardProps) {
  const t = useTranslate()
  const formatDistanceToNow = useFormatDistanceToNow()

  return (
    <Link href={`/rooms/${room.id}`}>
      <Card className="hover:bg-accent transition-colors">
        <div className="p-4">
          <div className="flex space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage
                src={`https://avatar.vercel.sh/${room.id}?`}
                alt={room.id}
                width={48}
                height={48}
              />
            </Avatar>

            <div className="flex flex-col">
              {/* Content */}
              <h2 className="text-sm font-medium">{room.name}</h2>
              <p className="text-[13px] truncate">{room.description}</p>
              <div className="text-xs text-muted-foreground flex items-center gap-x-1 pt-1">
                <Users2Icon className="h-3 w-3" />
                <span>
                  {room.memberCount}{' '}
                  {room.memberCount > 1 ? t('social.members') : t('social.member')}
                </span>{' '}
                <span>
                  {t('common.created')} • {formatDistanceToNow(room.createdAt as unknown as string)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  )
}
