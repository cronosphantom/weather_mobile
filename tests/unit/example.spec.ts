import { mount } from '@vue/test-utils'
import HistoryResult from '@/views/HistoryResult.vue'

describe('HistoryResult.vue', () => {
  it('renders tab 1 view', () => {
    const wrapper = mount(HistoryResult)
    expect(wrapper.text()).toMatch('Tab 1 page')
  })
})
