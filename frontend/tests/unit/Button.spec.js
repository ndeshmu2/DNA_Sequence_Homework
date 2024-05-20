import { mount } from '@vue/test-utils';
import Button from '@/components/Button.vue';

describe('Button.vue', () => {
    it('renders props.text when passed', () => {
        const text = 'Submit';
        const onClick = jest.fn();
        const wrapper = mount(Button, {
            props: { text, onClick }
        });
        expect(wrapper.text()).toMatch(text);
    });

    it('calls onClick method when clicked', async () => {
        const onClick = jest.fn();
        const wrapper = mount(Button, {
            props: { text: 'Click me', onClick }
        });
        await wrapper.find('button').trigger('click');
        expect(onClick).toHaveBeenCalled();
    });
});
