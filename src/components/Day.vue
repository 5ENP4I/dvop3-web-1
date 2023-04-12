<script lang ="ts">

    export default ({
      name : 'Day',
      props:{
        id: Number,
        temp: Number,
        dayOfWeek:String,
        sunState:String, 
        date: String,
        isShownAsClicked:Boolean,
        firstHour:Number, firstSunState:String,
        secondHour:Number, secondSunState:String,
        thirdHour:Number, thirdSunState:String,
      },
      data()
      {
        return{
            sunSource:"",
            hour1Source:"",
            hour2Source:"",
            hour3Source:"",
        };
      },
      mounted()
      {
        if(this.sunState =="Yellow")
        {
            this.sunSource = "../../public/RedSun.svg"
        }
        else if(this.sunState == "White")
        {
            this.sunSource = "../../public/WhiteSun.svg"
        }
        else if(this.sunState == "Blue")
        {
            this.sunSource = "@../../public/GraySun.svg"
        }

        if(this.firstSunState == "White")
        {
            this.hour1Source = "../../public/WhiteSun.svg"
        }
        else if(this.firstSunState == "Yellow")
        {
            this.hour1Source = "../../public/RedSun.svg"
        }


        if(this.secondSunState == "White")
        {
            this.hour2Source = "../../public/WhiteSun.svg"
        }
        else if(this.secondSunState == "Yellow")
        {
            this.hour2Source = "../../public/RedSun.svg"
        }


        if(this.thirdSunState == "White")
        {
            this.hour3Source = "../../public/WhiteSun.svg"
        }
        else if(this.thirdSunState == "Yellow")
        {
            this.hour3Source = "../../public/RedSun.svg"
        }
      }
      
    })
</script>

<template>
    <div class="flex flex-row place-items-stretch text-xl basis-full py-5 font-Font1">
        <template v-if="isShownAsClicked == true">
            <div class="flex flex-col w-full">
            <div class="pb-3"><p>{{dayOfWeek}}</p></div>
            <div class="flex flex-row font-Font1 place-items-center text-lg text-center">
                <div class="flex flex-col basis-1/4 bg-system-blue-300 rounded-md p-4">
                    <div class="basis-1/4">00 PM</div>
                    <div class="flex-grow"><img :src="sunSource" class="h-5/6 w-5/6 block mx-auto"/></div>
                    <div class="basis-1/4">{{temp}}&deg;</div>
                </div>
                <div class="flex flex-col basis-1/4 p-4">
                    <div class="basis-1/4">01 PM</div>
                    <div class="flex-grow flex"><img :src="hour1Source" class="h-5/6 w-5/6 block mx-auto"/></div>
                    <div class="basis-1/4">{{firstHour}}&deg;</div>
                </div>
                <div class="flex flex-col basis-1/4 p-4">
                    <div class="basis-1/4">02 PM</div>
                    <div class="flex-grow"><img :src="hour2Source" class="h-5/6 w-5/6 block mx-auto"/></div>
                    <div class="basis-1/4">{{secondHour}}&deg;</div>
                </div>
                <div class="flex flex-col basis-1/4 p-4">
                    <div class="basis-1/4">03 PM</div>
                    <div class="flex-grow"><img :src="hour3Source" class="h-5/6 w-5/6 block mx-auto"/></div>
                    <div class="basis-1/4">{{thirdHour}}&deg;</div>
                </div>
            </div>
            </div>
            
        </template>
        <template v-else>
                <div class="basis-1/3">
                    <div class="items-start">{{dayOfWeek}}</div>
                    <div class="items-end text-[#999999]">{{date}}</div>
                </div>
                <div class="basis-1/3 text-center items-center text-2xl font-bold"><p>{{temp}}&deg;</p></div>
                <div class="basis-1/3 "><img :src="sunSource" class="float-right"/></div>
        </template>
    </div>
</template>