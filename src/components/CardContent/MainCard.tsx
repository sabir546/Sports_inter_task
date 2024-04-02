import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useTheme } from "../ContextNav/ThemeContext";

const MainCard: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div className={`${theme === "light" ? "bg-gray-100" : "bg-gray-900 "}`}>

      <h1
        className={`${
          theme === "light" ? "text-gray-900" : "text-white"
        } text-xl md:text-3xl lg:text-4xl ml-20 mb-5   underline `}
      >
        Sports
      </h1>

      <div className="card flex items-center justify-center gap-3  flex-wrap">
        
       <Card>
          <div
            className={`${
              theme === "light" ? "bg-white" : "bg-gray-600"
            }  p-3  w-[15rem]  `}
          >
            <CardMedia
              sx={{ height: 380 }}
           
            image="https://s3-alpha-sig.figma.com/img/ceed/8067/dc33760174d3f67737f6e318d0f118ff?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R2IDtoTWwq630UlH0sKNg~PU50LNXExnhu5Lby1e1aLdOkwydkRY~HXB-V6cSPffJGRhDXSNxxlK-fhzp6oCJw4AMxMfrGYV7h4Ab12AafygPq3SNS7OE3WojSpsi6bD5ExlN-8qRgly1WcKMHSBoEw3u3FniJkrJ0w2ImgmjNYHWah-pXfm~a9T48AtxmKebamaJpr2xn36RUYW78500AjVkEPB6zySkuRUXbT3H98tztlw6dsNDkPqQlf15BAyQy9kSllufmh3lJ1feLC8QlXTwq4hqY~A9xr4tQBa3bN7Dy1OVBs-yFpo3a-qV2hwLo72kDN2Wsbn5ZDyANVrIQ__"
            
              title="green iguana"
            />
           

            <CardContent>
              <h2
                className={`${
                  theme === "light" ? "text-gray-900" : "text-white"
                } card font-bold text-lg -ml-4  `}
              >
                Sacramento River Cats
              </h2>
            </CardContent>

            <div
              className={`${
                theme === "light" ? "bg-gray-200" : "bg-neutral-800"
              } `}
            >
              <CardActions
                className={`${
                  theme === "light" ? "text-zinc-700" : "text-gray-300"
                } flex items-center justify-between `}
              >
                <h5  className="text-sm">Total Events</h5>
                <h5  className="text-sm">Sport</h5>
              </CardActions>
              <CardActions
                className={`${
                  theme === "light" ? "text-black" : "text-white"
                } flex items-center justify-between text-xl bg`}
              >
                <h3 className="text-lg" >
                  48 Events
                </h3>
                <h3  className="text-lg">Baseball</h3>
              </CardActions>
            </div>
          </div>
        </Card> 
        

          <Card>
          <div
            className={`${
              theme === "light" ? "bg-white" : "bg-gray-600"
            }   p-3 w-[15rem] `}
          >
            <CardMedia
              sx={{ height: 380 }}
              image="https://s3-alpha-sig.figma.com/img/a24a/d1e0/76e2b366b2456bbd169b0c3c9525252c?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TK4llJT2pgcu3ilu6zcGbJNMPy6WZ2BCQ3HuVKG51H1q7sxA7SeuaVkAvOX6VIvYUE2Ojd8xIg0-fOZA1fMbGaNc2FnbVB3Ns3k1Zr4WFToAe1QvcU8UpVmc-Hl2lvznD07nJjYwjW9k5CJhDOnvQOXpqXcOKyrwbTU8BF2am3kQ51jM9Wl74B9OpgcTDMLJZBJxbcd8SE4Uy5vWcJAfgXMbz~jU8xojWH6omeDS37Hdb1moRma8i0SvodDH5fjTRgwuGL7gFwCD7~83Sfu6i2FQIrkKpMo6hRwsC-BEHL1XzJc~EAYnxuCSsf~9WlUkH~jNtemUeuTd4lDQsYTFYA__"
              title="green iguana"
            />
            <CardContent>
              <h2
                className={`${
                  theme === "light" ? "text-gray-900" : "text-white"
                } card font-bold text-lg -ml-4  `}
              >
                Las Vegas Avlators
              </h2>
            </CardContent>

            <div
              className={`${
                theme === "light" ? "bg-gray-200" : "bg-neutral-800"
              } `}
            >
              <CardActions
                className={`${
                  theme === "light" ? "text-zinc-700" : "text-gray-300"
                } flex items-center justify-between `}
              >
                <h5  className="text-sm">Total Events</h5>
                <h5 className="text-sm">Sport</h5>
              </CardActions>
              <CardActions
                className={`${
                  theme === "light" ? "text-black" : "text-white"
                } flex items-center justify-between text-xl`}
              >
                <h3  className="text-lg">
                  28 Events
                </h3>
                <h3  className="text-lg">Baseball</h3>
              </CardActions>
            </div>
          </div>
        </Card>

        <Card>
          <div
            className={`${
              theme === "light" ? "bg-white" : "bg-gray-600"
            }   p-3 w-[15rem]   `}
          >
            <CardMedia
              sx={{ height: 380 }}
              image="https://s3-alpha-sig.figma.com/img/b290/2f7a/b2fcf21c696811f745109da24a740d73?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aOIL0vbL-m9iT5zk9QgIMAuvKeb743mI79NOZ~ml1KEP~5ktJekjebnlUp7PiGpZqtcwxLdfAvTLnIph0yxbxyo-vmObi3f8KCiIqKqbJkdTzrv8KaYp8~ftNfuIyohzBck2tHl0WaPSeh1uFvI~9edGXYdE6oiGv8tB1qM7hWcahtigUHRLEs0QA5HsQbSgw9e~fmORNmgRU1fD3fC8vlKMm-hHSUOE6zaL15rcTYR5uFgIt~HDJk2wippN6nlRelBTireM66ciiK1nsNx~jP8W8UFom6sdt-RwQvPKSPVdcENCEY2X7Zj2DOJHW7yLu6nLlN3xgctknE0yAy0HjA__"
              title="green iguana"
            />
            <CardContent>
              <h2
                className={`${
                  theme === "light" ? "text-gray-900" : "text-white"
                } card font-bold text-lg -ml-4  `}
              >
                New Jersey Devils
              </h2>
            </CardContent>
            <div
              className={`${
                theme === "light" ? "bg-gray-200" : "bg-neutral-800"
              } `}
            >
              <CardActions
                className={`${
                  theme === "light" ? "text-zinc-700" : "text-gray-300"
                } flex items-center justify-between `}
              >
                <h5  className="text-sm">Total Events</h5>
                <h5  className="text-sm">Sport</h5>
              </CardActions>
              <CardActions
                className={`${
                  theme === "light" ? "text-black" : "text-white"
                } flex items-center justify-between text-xl`}
              >
                <h3  className="text-lg">
                  15 Events
                </h3>
                <h3 className="text-lg">Ice Hockey</h3>
              </CardActions>
            </div>
          </div>
        </Card>
       
        <Card>
          <div
            className={`${
              theme === "light" ? "bg-white" : "bg-gray-600"
            } p-3 w-[15rem]   `}
          >
            <CardMedia
              sx={{ height: 380 }}
              image="https://s3-alpha-sig.figma.com/img/a24a/d1e0/76e2b366b2456bbd169b0c3c9525252c?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TK4llJT2pgcu3ilu6zcGbJNMPy6WZ2BCQ3HuVKG51H1q7sxA7SeuaVkAvOX6VIvYUE2Ojd8xIg0-fOZA1fMbGaNc2FnbVB3Ns3k1Zr4WFToAe1QvcU8UpVmc-Hl2lvznD07nJjYwjW9k5CJhDOnvQOXpqXcOKyrwbTU8BF2am3kQ51jM9Wl74B9OpgcTDMLJZBJxbcd8SE4Uy5vWcJAfgXMbz~jU8xojWH6omeDS37Hdb1moRma8i0SvodDH5fjTRgwuGL7gFwCD7~83Sfu6i2FQIrkKpMo6hRwsC-BEHL1XzJc~EAYnxuCSsf~9WlUkH~jNtemUeuTd4lDQsYTFYA__"
              title="green iguana"
            />
            <CardContent>
              <h2
                className={`${
                  theme === "light" ? "text-gray-900" : "text-white"
                } card font-bold text-lg -ml-4  `}
              >
                Las Vegas Avlators
              </h2>
            </CardContent>

            <div
              className={`${
                theme === "light" ? "bg-gray-200" : "bg-neutral-800"
              } `}
            >
              <CardActions
                className={`${
                  theme === "light" ? "text-zinc-700" : "text-gray-300"
                } flex items-center justify-between `}
              >
                <h5  className="text-sm">Total Events</h5>
                <h5  className="text-sm">Sport</h5>
              </CardActions>
              <CardActions
                className={`${
                  theme === "light" ? "text-black" : "text-white"
                } flex items-center justify-between text-xl`}
              >
                <h3  className="text-lhg">
                  28 Events
                </h3>
                <h3 className="text-lg">Baseball</h3>
              </CardActions>
            </div>
          </div>
        </Card>

        <Card>
          <div
            className={`${
              theme === "light" ? "bg-white" : "bg-gray-600"
            } p-3 w-[15rem] `}
          >
            <CardMedia
              sx={{ height: 220 }}
              image="https://s3-alpha-sig.figma.com/img/c724/731e/f71497e0e3af85c77fa47046bb1f23cb?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hcDBsK4weZt8Xn5qj6nW8PTyWjQF1Ymo3AzKkf3fCp6fQb7wmw~4sv-jZgjj2REupfgw5yS-SwfYk3A4t0wrVY1tVvRCH7F4OzJ5wQ83JakPCLZPqzn6Ynqmue2ZJZDvWgdj1CrL866iG-pQEEe1XhvAxxI3UJHKlaf73ywWPaE-x8h1u1KVKYrv8FQrWpykUFhPezF~CbfHlogCgsbE3V5xX1CIefiL~TlA3Xen2NReAER6Vcu59wxu3JDwvdgTxHZcDF02o9B4tBOCcoD~XwQa~pdiYueAL9IDyTG4Nt~U4fyuD75ahnDhmZMr2syPwmukRa-XkKhA87TRNz5~tQ__"
              title="green iguana"
            />
            <CardContent>
              <h2
                className={`${
                  theme === "light" ? "text-gray-900" : "text-white"
                } card font-bold text-lg -ml-4`}
              >
                Advertisement title
              </h2>
            </CardContent>

            <CardActions className="flex items-center justify-between  text-sm pb-0 mb-11">
              <p
                className={
                  theme === "light" ? "text-zinc-800" : "text-gray-100"
                }
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                magnam, odit esse sequi, mollitia consequuntur dolores, aliquid
                saepe quam nisi voluptas nostrum. Placeat natus temporibus ipsam
                eaque nulla, dolore doloremque reiciendis pariatur animi autem .
              </p>
            </CardActions>
          </div>
        </Card>

      </div>
      <button className="px-8 py-3 bg-blue-500 lg:ml-[42vw] ml-20  mt-10 text-white rounded-sm mb-4">
        See More
      </button>
    </div>
  );
}

export default MainCard;

