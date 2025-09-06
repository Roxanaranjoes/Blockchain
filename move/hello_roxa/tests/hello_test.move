module hello_roxa::hello_test {
    use std::debug;
    use hello_roxa::hello;

    #[test]
    public fun test_hi() {
        let x = hello::hi();
        debug::print(&x);
        assert!(x == 42, 1);
    }
}

