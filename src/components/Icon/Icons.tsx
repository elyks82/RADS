const DEFAULT_FILL = '#000000'
interface IIcons {
  [key: string]: (_fill?: string) => JSX.Element
}
const HrefArrow = (fill?: string) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    transform="rotate(0)"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0" />
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      {' '}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.46451 7.05023C7.46451 6.49795 7.91222 6.05023 8.46451 6.05023H16.9496C16.9497 6.05023 16.9498 6.05023 16.95 6.05023H16.9645C17.5168 6.05023 17.9645 6.49795 17.9645 7.05023V15.5502C17.9645 16.1025 17.5168 16.5502 16.9645 16.5502C16.4122 16.5502 15.9645 16.1025 15.9645 15.5502V9.44973L7.7574 17.6568C7.36688 18.0474 6.73371 18.0474 6.34319 17.6568C5.95266 17.2663 5.95266 16.6331 6.34319 16.2426L14.5356 8.05023H8.46451C7.91222 8.05023 7.46451 7.60252 7.46451 7.05023Z"
        fill={fill ?? DEFAULT_FILL}
      />{' '}
    </g>
  </svg>
)

const Discord = (fill?: string) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.59 5.88997C17.36 5.31997 16.05 4.89997 14.67 4.65997C14.5 4.95997 14.3 5.36997 14.17 5.69997C12.71 5.47997 11.26 5.47997 9.83001 5.69997C9.69001 5.36997 9.49001 4.95997 9.32001 4.65997C7.94001 4.89997 6.63001 5.31997 5.40001 5.88997C2.92001 9.62997 2.25001 13.28 2.58001 16.87C4.23001 18.1 5.82001 18.84 7.39001 19.33C7.78001 18.8 8.12001 18.23 8.42001 17.64C7.85001 17.43 7.31001 17.16 6.80001 16.85C6.94001 16.75 7.07001 16.64 7.20001 16.54C10.33 18 13.72 18 16.81 16.54C16.94 16.65 17.07 16.75 17.21 16.85C16.7 17.16 16.15 17.42 15.59 17.64C15.89 18.23 16.23 18.8 16.62 19.33C18.19 18.84 19.79 18.1 21.43 16.87C21.82 12.7 20.76 9.08997 18.61 5.88997H18.59ZM8.84001 14.67C7.90001 14.67 7.13001 13.8 7.13001 12.73C7.13001 11.66 7.88001 10.79 8.84001 10.79C9.80001 10.79 10.56 11.66 10.55 12.73C10.55 13.79 9.80001 14.67 8.84001 14.67ZM15.15 14.67C14.21 14.67 13.44 13.8 13.44 12.73C13.44 11.66 14.19 10.79 15.15 10.79C16.11 10.79 16.87 11.66 16.86 12.73C16.86 13.79 16.11 14.67 15.15 14.67Z"
      fill={fill ?? DEFAULT_FILL}
    />
  </svg>
)

const Telegram = (fill?: string) => (
  <svg
    fill={fill ?? DEFAULT_FILL}
    height="800px"
    width="800px"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 300"
  >
    <g id="XMLID_496_">
      <path
        id="XMLID_497_"
        d="M5.299,144.645l69.126,25.8l26.756,86.047c1.712,5.511,8.451,7.548,12.924,3.891l38.532-31.412
		c4.039-3.291,9.792-3.455,14.013-0.391l69.498,50.457c4.785,3.478,11.564,0.856,12.764-4.926L299.823,29.22
		c1.31-6.316-4.896-11.585-10.91-9.259L5.218,129.402C-1.783,132.102-1.722,142.014,5.299,144.645z M96.869,156.711l135.098-83.207
		c2.428-1.491,4.926,1.792,2.841,3.726L123.313,180.87c-3.919,3.648-6.447,8.53-7.163,13.829l-3.798,28.146
		c-0.503,3.758-5.782,4.131-6.819,0.494l-14.607-51.325C89.253,166.16,91.691,159.907,96.869,156.711z"
      />
    </g>
  </svg>
)

const Xitter = (fill?: string) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
      fill={fill ?? DEFAULT_FILL}
    />
  </svg>
)

const Icons: IIcons = {
  Discord,
  Telegram,
  Xitter,
  HrefArrow,
}

export default Icons