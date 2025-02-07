import React from 'react'
import SocialLayout from '../components/social_layout'
import SearchTabs from '../components/search_tabs'
import Post from '#social/models/post'
import { Link } from '@inertiajs/react'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { PostCard } from '../components/post_card'
import { useFormatDistanceToNow } from '#common/ui/hooks/use_format_distance_to_now'
import { Alert, AlertTitle, AlertDescription } from '#common/ui/components/alert'
import { SearchX } from 'lucide-react'
import useTranslate from '#common/ui/hooks/use_translate'

export default function Posts({ posts }: { posts: Post[] }) {
  const formatDistanceToNow = useFormatDistanceToNow()
  const t = useTranslate()

  return (
    <SocialLayout>
      <SearchTabs resource="posts" />
      <div className="pt-4 grid gap-y-4">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            room={post.room}
            header={
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Link
                    className="hover:opacity-75 transition-opacity"
                    href={`/rooms/${post.roomId}`}
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={`https://avatar.vercel.sh/${post.roomId}?rounded=100`}
                        alt={post.roomId}
                        width={32}
                        height={32}
                      />
                    </Avatar>
                  </Link>

                  <div className="flex flex-col">
                    <div className="flex items-center gap-1 text-[13px]">
                      <Link
                        className="font-medium hover:text-emerald-600 transition-colors"
                        href={`/rooms/${post.roomId}`}
                      >
                        {post.room.name}
                      </Link>
                      <span className="text-muted-foreground">
                        • {formatDistanceToNow(post.createdAt as unknown as string)}
                      </span>
                    </div>

                    <div className="flex">
                      <Link
                        className="text-xs text-muted-foreground hover:text-emerald-800 transition-colors"
                        href={`/profiles/${post.user.username}`}
                      >
                        {post.user.username}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        ))}
        {posts.length === 0 ? (
          <Alert>
            <SearchX className="h-5 w-5 stroke-red-700" />
            <AlertTitle>{t('social.no_results_title')}</AlertTitle>
            <AlertDescription>{t('social.no_results_description')}</AlertDescription>
          </Alert>
        ) : null}
      </div>
    </SocialLayout>
  )
}
