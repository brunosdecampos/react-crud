// React and Next
import { NextPage } from "next"
import Link from "next/link"

// External Libraries
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

// Local Components
import stylesWebsite from '@styles/Website.module.scss'
import { BASE_URL } from "@constants/index"

interface Link {
  leftLinkName?: string,
  leftLinkPath?: string,
  rightLinkName?: string,
  rightLinkPath?: string
}

const TopNavBar: NextPage<Link> = ({ leftLinkName, leftLinkPath, rightLinkName, rightLinkPath }) => {
  let leftLinkUrl = leftLinkPath ? new URL(BASE_URL + leftLinkPath) : ''
  let rightLinkUrl = rightLinkPath ? new URL(BASE_URL + rightLinkPath) : ''

  return <>
    {(leftLinkPath || rightLinkPath) && <>
      <div className={`${stylesWebsite.topNavBar} ${!leftLinkPath && rightLinkPath && 'flex-row-reverse'} font-montserrat-500`}>
        {leftLinkPath && <>
          <Link href={leftLinkUrl} passHref>
            <div className='flex gap-4 items-center cursor-pointer hover:opacity-80'>
              <ArrowLeftIcon className="h-6 w-6 text-blue-700" />
              <div className='mb-[2px]'>{leftLinkName}</div>
            </div>
          </Link>
        </>}

        {rightLinkPath && <>
          <Link href={rightLinkUrl} passHref>
            <div className='flex gap-4 items-center cursor-pointer hover:opacity-80'>
              <div className='mb-[2px]'>{rightLinkName}</div>
              <ArrowRightIcon className="h-6 w-6 text-blue-700" />
            </div>
          </Link>
        </>}
      </div>
    </>}
  </>
}

export { TopNavBar }