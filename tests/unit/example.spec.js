import { shallowMount } from '@vue/test-utils'
import GameImage from '@/components/GameImage.vue'
import GameBox from '@/components/GameBox.vue'

const gameInformationObject = {
  id: '201',
  name: 'Call Of Duty Infinite Warfare',
  price: '49.99',
  score: '80',
  image: 'call-of-duty-infinite-warfare.png'
} 

//Game Image Unitary tests

describe('GameImage.vue', () => {
  it('Should receive all props of GameImage component', () => {
    const wrapper = shallowMount(GameImage, {
      propsData: { 
        gameName: gameInformationObject.name,
        gameImage: gameInformationObject.image,
        small: true
      }
    })
    expect(wrapper.props().gameName).toMatch(gameInformationObject.name)
    expect(wrapper.props().gameImage).toMatch(gameInformationObject.image)
    expect(wrapper.props().small).toBe(true)
  })
})

//Game Box Unitary tests

describe('GameBox.vue', () => {
  it('Should on click emit game to cart', async () => {
    const wrapper = shallowMount(GameBox, {
      propsData:{
        gameInformation: gameInformationObject
      }
    })

    wrapper.find('.game-box').trigger('click')

    await wrapper.vm.$nextTick()

    expect(wrapper.emitted('add-to-cart')).toBeTruthy()
  })
})